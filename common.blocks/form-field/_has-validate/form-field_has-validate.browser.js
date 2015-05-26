/**
 * @module form-field
 */
modules.define('form-field',
    ['i-bem__dom', 'validation'],
    function(provide, BEMDOM, Validation, FormField) {

/**
 * Field block
 */
FormField.decl({ block: this.name, modName: 'has-validate', modVal: true }, /** @lends form-field.prototype */{

    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                if (this.hasMod('type')) {
                    this.getControl().bindTo('control', 'blur', function(e) {
                        this._dirty = this._dirty || (this.getVal() != this._initVal);
                        this._dirty && this.validate();
                    }.bind(this));
                }

                this._initVal = this.getVal();
            }
        }
    },

    getDirty: function() {
        return !!this._dirty;
    },

    _updateStatus: function() {
        this.__base.apply(this, arguments);

        if (this.hasMod('message')) {
            this.setMessageVal(this._status);
            this._status && this.hasMod('focused') && this.getMessage().show();
        }
    }
});

provide(FormField);

});
