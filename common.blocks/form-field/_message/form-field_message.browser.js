/**
 * @module form-field
 */
modules.define('form-field',
    function(provide, FormField) {

/**
 * Base form-field__message class
 *
 * @exports
 * @class form-field
 * @bem
 */
FormField.decl({ block : this.name, modName : 'message' }, /** @lends form-field.prototype */{

    /**
     * Set message value
     * @public
     * @abstract
     */
    setMessageVal : function(val) {
        this.__base.apply(this, arguments);

        if (this.getMod('message') === 'popup') {
            // anchor on input instead of 'message' block
            var input = this.findBlockInside(this.getMod('type') || 'input');
            input && this._getMessage()._popup.setAnchor(input);
        }

        return this;
    }
});

provide(FormField);

});
