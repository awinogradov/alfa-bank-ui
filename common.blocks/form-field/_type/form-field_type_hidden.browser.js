modules.define('form-field', function(provide, FormField) {

    provide(FormField.decl({ modName : 'type', modVal : 'hidden' }, {

        getName : function() {
            return this.params.name;
        },

        _value : '',

        setVal : function(val) {
            this._value = val;
        },

        getVal : function(val) {
            return this._value;
        }

    }));
});
