modules.define('input',
    ['popup', 'menu', 'dom', 'jquery', 'BEMHTML', 'i-bem__dom', 'keyboard__codes'],
    function(provide, Popup, Menu, dom, $, BEMHTML, BEMDOM, KeyCodes, Input) {

function nextNotHidden(items, index) {
    var i = index;
    if (i < items.length - 1) i++;
    while (i < items.length - 1 && items[i].hasMod('hidden')) i++;
    return (items[i] && items[i].hasMod('hidden')) ? index : i;
}

function previousNotHidden(items, index) {
    var i = index;
    if (i > 0) i--;
    while (i > 0 && items[i].hasMod('hidden')) i--;
    return (items[i] && items[i].hasMod('hidden')) ? index : i;
}

/* istanbul ignore next: hard to test, depends on styles */
function reveal(parent, item) {
    var pos = item.position().top,
        margin = 20,
        newScroll = null;
    if (pos < 0) {
        newScroll = parent.scrollTop() + pos - margin;
    } else if (pos + item.outerHeight() >= parent.height()) {
        newScroll = parent.scrollTop() + pos + item.outerHeight() + margin - parent.height();
    }
    if (newScroll != null) {
        // TODO animate
        parent.scrollTop(newScroll);
    }
}

provide(Input.decl({ modName: 'has-autocomplete' }, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);
                this._popup = this.findBlockInside('popup');
                this._popup.setAnchor(this);
                this._menu = this._popup.findBlockInside('menu');

                this._menu.on({ 'item-click': this._onMenuItemClick }, this);

                this.bindTo('keydown', this._handleKey.bind(this));

                this._isPointerPressInProgress = false;
                this._updateMenuWidth();
            }
        },
        'focused': {
            'true': function() {
                this.__base.apply(this, arguments);
                this.setMod('opened');
            },
            '': function() {
                this.__base.apply(this, arguments);
                if (!this._isPointerPressInProgress) this.delMod('opened');
            }
        },
        'opened': {
            'true': function() {
                this._popup.setMod('visible');
                this.bindToDoc('pointerpress', this._onDocPointerPress);
            },

            '': function() {
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
    setOptions: function(opts) {
        var mapItems = function(item) {
            if (item.group) {
                return {
                    block: 'menu',
                    elem: 'group',
                    title: item.title,
                    content: item.group.map(mapItems)
                };
            } else {
                return {
                    block: 'menu-item',
                    mods: {
                        theme: this.getMod('theme'),
                        bkg: this.getMod('bkg'),
                        size: this.getMod('size')
                    },
                    val: item.val,
                    data: item.data,
                    content: item.content
                };
            }
        }.bind(this);

        BEMDOM.update(this._menu.domElem, BEMHTML.apply(opts.map(mapItems)));
        this._resetFocusedItem();
    },

    getMenu: function() {
        return this._menu;
    },

    _onDocPointerPress: function(e) {
        if (this._isEventInPopup(e)) {
            this._isPointerPressInProgress = true;
            this.bindToDoc('pointerrelease', this._onDocPointerRelease);
        } else {
            this.delMod('opened');
        }
    },

    _onDocPointerRelease: function(e) {
        this._isPointerPressInProgress = false;
        this.unbindFromDoc('pointerrelease', this._onDocPointerRelease);
    },

    _isEventInPopup: function(e) {
        var $target = $(e.target);
        return dom.contains(this._popup.domElem, $target)
            || dom.contains(this.domElem, $target);
    },

    _onMenuItemClick: function(_, data) {
        this.setVal(data.item.getVal());
        this.emit('select', data.item.params);
        this.delMod('opened');
        this._resetFocusedItem();
    },

    _updateMenuWidth: function() {
        this._popup.domElem.css('min-width', this.domElem.outerWidth());
        this._popup.redraw();
    },

    _resetFocusedItem: function() {
        if (this._menuItems && (typeof this._focusedItem !== 'undefined') && this._menuItems[this._focusedItem]) {
            this._menuItems[this._focusedItem].delMod('focused');
        }
        delete this._menuItems;
        delete this._focusedItem;
    },

    _handleKey: function(e) {

        if (e.keyCode === KeyCodes.DOWN && !this.getMod('opened')) {
            this.setMod('opened');
        }

        if (e.keyCode === KeyCodes.UP || e.keyCode === KeyCodes.DOWN) {

            if (!this._menuItems) this._menuItems = this._menu.findBlocksInside('menu-item');

            if (typeof this._focusedItem === 'undefined') {
                this._focusedItem = -1;
            }

            if (this._focusedItem != -1) this._menuItems[this._focusedItem].delMod('focused');

            this._focusedItem = e.keyCode === KeyCodes.DOWN ?
                nextNotHidden(this._menuItems, this._focusedItem) :
                previousNotHidden(this._menuItems, this._focusedItem);

            if (this._focusedItem != -1) {
                this._menuItems[this._focusedItem].setMod('focused');
                reveal(this._popup.domElem, this._menuItems[this._focusedItem].domElem);
            }
        }

        if (e.keyCode === KeyCodes.ENTER) {
            if (typeof this._focusedItem !== 'undefined' && this._focusedItem != -1) {
                this._onMenuItemClick(null, { item: this._menuItems[this._focusedItem] });
                e.preventDefault();
                return true;
            }
        }

    }

},
{
    live : function() {
        this.__base.apply(this, arguments);
        return true;
    }
}));

});
