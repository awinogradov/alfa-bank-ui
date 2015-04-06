modules.define('select',
['popup', 'menu', 'dom', 'jquery', 'BEMHTML', 'i-bem__dom'],
function(provide, Popup, Menu, dom, $, BEMHTML, BEMDOM, Select) {

    provide(Select.decl({

        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);
                }
            }
        },

        getPopup: function() {
            // FIXME @spanferov private field access
            return this._popup;
        },

        resetMenu: function(menu) {
            this._menu.un();

            menu.on({
                'change' : this._onMenuChange,
                'item-click' : this._onMenuItemClick
            }, this);

            this._menu = menu;
            this._updateMenuWidth();
        },

        setOptions: function (options) {
            var popup = this.getPopup();

            BEMDOM.update(popup.domElem, BEMHTML.apply({
                block: 'select',
                elem: 'menu',
                mods: this.getMods(),
                options: options
            }));

            var menu = popup.findBlockInside('menu');

            this.resetMenu(menu)
        }

    }));

});
