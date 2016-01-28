/**
 * @module form
 */
modules.define('form',
    function(provide, Form) {

/**
 * Form block
 */
Form.decl(this.name, {
    _onSubmit: function() {
        this.__base.apply(this, arguments);

        this.validate()
            .then(function(fieldsStatuses) {
                if (!this.checkFields(fieldsStatuses)) {
                    this.getInvalidFields()
                        .then(function(invalidFields) {
                            invalidFields[0]
                                .getControl()
                                .setMod('focused');
                        });
                }
            }.bind(this));
    }
});

provide(Form);

});
