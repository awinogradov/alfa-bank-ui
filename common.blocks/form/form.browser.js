/**
 * temp fix while https://github.com/bem/bem-forms/pull/81 is in progress
 */
/* istanbul ignore next: will be removed */
modules.define('form', function(provide, Form) {

    provide(Form.decl(this.name, {
        /**
         * Returns field by name
         * @type {FormField[]}
         */
        getFieldByName : function(name) {
            return this.findBlocksInside({ block : 'form-field', modName : 'name', modVal : name });
        }
    }));

});
