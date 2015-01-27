modules.define('dropdown', [], function(provide, Dropdown) {
    provide(Dropdown.decl({ modName : 'mode', modVal : 'hover' }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    var _this = this;
                    var block = this.getSwitcher();
                    block && block.bindTo('mouseenter', function() {
                        _this.setMod('opened', true);
                    });

                    var popup = _this.getPopup();
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
