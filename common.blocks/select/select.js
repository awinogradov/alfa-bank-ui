modules.define('select',
['BEMHTML', 'i-bem__dom'],
function(provide, BEMHTML, BEMDOM, Select) {

provide(Select.decl({

    onSetMod: {
        'hovered': {
            'true': function() {
                this.bindTo('mouseleave', this._onButtonMouseLeave);
            },
            '': function() {
                this.unbindFrom('mouseleave', this._onButtonMouseLeave);
            }
        }
    },

    getPopup: function() {
        return this._popup;
    },

    resetMenu: function(menu) {
        this._menu.un();

        menu.on({
            'change': this._onMenuChange,
            'item-click': this._onMenuItemClick
        }, this);

        this._menu = menu;
        this._updateMenuWidth();
    },

    setOptions: function(options) {
        var popup = this.getPopup();

        BEMDOM.update(popup.domElem, BEMHTML.apply({
            block: 'select',
            elem: 'menu',
            mods: this.getMods(),
            options: options
        }));

        var menu = popup.findBlockInside('menu');

        this.resetMenu(menu);
        this._menu.emit('change');
    },

    _onButtonMouseOver: function() {
        this.setMod('hovered');
    },

    _onButtonMouseLeave: function() {
        this.delMod('hovered');
    }

}, {
    live: function() {
        return this
            .liveBindTo('button', 'mouseover', this.prototype._onButtonMouseOver)
            .__base.apply(this, arguments);

    }
}));

});
