modules.define('input',
    ['popup', 'menu', 'dom', 'jquery', 'BEMHTML', 'i-bem__dom'],
    function(provide, Popup, Menu, dom, $, BEMHTML, BEMDOM, Input) {

    function mapItems(item) {
        if(item.group) {
            return {
                block : 'menu',
                elem : 'group',
                title : item.title,
                content : item.group.map(mapItems)
            };
        } else {
            return {
                block : 'menu-item',
                val : item.val,
                data : item.data,
                content : item.content
            };
        }
    }

provide(Input.decl({ modName : 'has-autocomplete' }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._popup = this.findBlockInside('popup');
                this._popup.setAnchor(this);
                this._menu = this._popup.findBlockInside('menu');

                this._menu.on({ 'item-click' : this._onMenuItemClick }, this);

                this._isPointerPressInProgress = false;
                this._updateMenuWidth();
            }
        },
        'focused' : {
            'true' : function() {
                this.__base.apply(this, arguments);
                this.setMod('opened');
            },
            '' : function() {
                this.__base.apply(this, arguments);
                if (!this._isPointerPressInProgress) this.delMod('opened');
            }
        },
        'opened' : {
            'true' : function() {
                this._popup.setMod('visible');
                this.bindToDoc('pointerpress', this._onDocPointerPress);
            },

            '' : function() {
                this._popup.delMod('visible');
                this.unbindFromDoc('pointerpress', this._onDocPointerPress);
            }
        }
    },

    /**
     * Set new autocomplete options
     *
     * @param {Array} opts new options
     */
    setOptions : function(opts) {
        BEMDOM.update(this._menu.domElem, BEMHTML.apply(opts.map(mapItems)));
    },

    _onDocPointerPress : function(e) {
        if (this._isEventInPopup(e)) {
            this._isPointerPressInProgress = true;
            this.bindToDoc('pointerrelease', this._onDocPointerRelease);
        } else {
            this.delMod('opened');
        }
    },

    _onDocPointerRelease : function(e) {
        this._isPointerPressInProgress = false;
        this.unbindFromDoc('pointerrelease', this._onDocPointerRelease);
    },

    _isEventInPopup : function(e) {
        return dom.contains(this._popup.domElem, $(e.target));
    },

    _onMenuItemClick : function(_, data) {
        this.setVal(data.item.getVal());
        this.emit('select', data.item.params);
        this.delMod('opened');
    },

    _updateMenuWidth : function() {
        this._menu.domElem.css('min-width', this.domElem.outerWidth());

        this._popup.redraw();
    }

}));

});
