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

    _updateStatus : function() {
        this.__base.apply(this, arguments);
        if (this.hasMod('message')) {
            this.setMessageVal(this._status);
            this._getMessage().setMod('error', true);
        }
    }
});

provide(FormField);

});
