/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {

/**
 * Field block
 */
FormField.decl(this.name, {
    onSetMod: {
        'focused': {
            'true': function() {
                this.__base.apply(this, arguments);
                if (this.hasMod('invalid')) {
                    this.getMessage().show();
                }
            },
            '': function() {
                this.__base.apply(this, arguments);
                this.getMessage().hide();
            }
        }
    }

});

provide(FormField);

});
