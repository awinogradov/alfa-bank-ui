/**
 * @module form-field
 */
modules.define('form-field',
    ['i-bem__dom', 'validation'],
    function(provide, BEMDOM, Validation, FormField) {

/**
 * Field block
 */
FormField.decl({ block: this.name, modName: 'has-validation', modVal: true }, /** @lends form-field.prototype */{

    getDirty: function() {
        return !!this._dirty;
    }
});

provide(FormField);

});
