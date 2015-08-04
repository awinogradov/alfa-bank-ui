modules.define('form-field', function(provide, FormField) {

provide(FormField.decl({ modName: 'message', modVal: 'popup' }, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);
                /* istanbul ignore else: no way to check, form-field throws without `type` */
                if (this.hasMod('type')) {
                    this.getMessage().setAnchor(this.getControl());
                }
            }
        },
        'focused': {
            'true': function() {
                this.__base.apply(this, arguments);

                this.hasMod('invalid') && this.getMessage().show();
            },
            '': function() {
                this.__base.apply(this, arguments);

                this.getMessage().hide();
            }
        }
    }
}));

});
