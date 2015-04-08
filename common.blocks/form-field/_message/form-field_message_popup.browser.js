modules.define('form-field', [], function(provide, FormField) {

provide(FormField.decl({ modName : 'message', modValue : 'popup' }, {
    onSetMod : {
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
    },
    /**
     * Set message value
     * @public
     * @abstract
     */
    setMessageVal : function(val) {
        this.__base.apply(this, arguments);

        // anchor on input instead of 'message' block
        var input = this.findBlockInside(this.getMod('type') || 'input');

        input && this.getMessage()._popup.setAnchor(input);

        return this;
    }
}));

});
