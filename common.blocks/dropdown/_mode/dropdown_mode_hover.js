modules.define('dropdown', [], function(provide, Dropdown) {
    provide(Dropdown.decl({ modName : 'mode', modVal : 'hover' }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    var self = this;
                    var block = self.findBlockInside(this.getMod('switcher'));
                    block && block.domElem.on('mouseenter', function() {
                        self.setMod('opened', true);
                    });

                    var popup = self.getPopup();
                    popup && popup.bindTo('mouseleave', function() {
                        self.setMod('opened', false);
                    });
                }
            }
        }
    },
    {
        live : false
    }));
});
