/**
 * @module form-field
 *
 * Throws error without 'has-validation' mod
 *
 * FIXME: PR to bem-forms
 */
modules.define('form-field', function(provide, FormField) {

    provide(FormField.decl({ modName: 'validate' }, {
        onSetMod: {
            'js': {
                'inited': function() {
                    this.__base.apply(this, this.arguments);

                    if (!this.hasMod('has-validation')) {
                        throw new Error('`validate` should not be used without `has-validation`!');
                    }
                }
            }
        }
    }));

});
