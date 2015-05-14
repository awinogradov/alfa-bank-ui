modules.define('form-field', [], function(provide, FormField) {

provide(FormField.decl({ modName : 'message', modValue : 'popup' }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                if (this.hasMod('type')) {
                    this.getMessage()._popup.setAnchor(this.getControl());
                }
            }
        },
        'focused' : {
            'true' : function() {
                this.__base.apply(this, arguments);

                this.hasMod('invalid') && this.getMessage().show();
            },
            '' : function() {
                this.__base.apply(this, arguments);

                this.getMessage().hide();
            }
        }
    }
}));

});
