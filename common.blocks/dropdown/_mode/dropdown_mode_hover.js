modules.define('dropdown', [], function(provide, Dropdown) {
    provide(Dropdown.decl({ modName : 'mode', modVal : 'hover' }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    var _this = this,
                        switcher = _this.getSwitcher(),
                        popup = _this.getPopup();

                    switcher && switcher.bindTo('mouseenter', function() {
                        _this.setMod('opened', true);
                    });

                    popup && popup.bindTo('mouseleave', function() {
                        _this.setMod('opened', false);
                    });
                }
            }
        }
    },
    {
        live : false
    }));
});
