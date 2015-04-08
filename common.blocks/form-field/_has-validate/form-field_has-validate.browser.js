/**
 * @module form-field
 */
modules.define('form-field',
    ['i-bem__dom', 'validation'],
    function(provide, BEMDOM, Validation, FormField) {

/**
 * Field block
 */
FormField.decl({ block : this.name, modName : 'has-validate', modVal : true }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.getControl().elem('control').on('blur',
                    this.validate.bind(this));
            }
        }
    },

    _updateStatus : function() {
        this.__base.apply(this, arguments);

        this.setMessageVal(this._status);
    }
});

provide(FormField);

});
