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

                this.getControl().bindTo('control', 'blur', function(e) {
                    this._dirty = this._dirty || (this.getVal() != this._initVal);
                    this._dirty && this.validate();
                }.bind(this));

                this._initVal = this.getVal();
            }
        }
    },

    _updateStatus : function() {
        this.__base.apply(this, arguments);

        this.setMessageVal(this._status);
        this.hasMod('focused') && this.getMessage().show();
    }
});

provide(FormField);

});
