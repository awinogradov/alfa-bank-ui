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
        this.toggleMod('invalid', true, Boolean(this._status));
        this.getControl().toggleMod('invalid', true, Boolean(this._status));
        this.hasMod('message') && this.setMessageVal(this._status);
    }
});

provide(FormField);

});
