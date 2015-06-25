modules.define('form-field', function(provide, FormField) {
    provide(FormField.decl({ modName: 'type', modVal: 'input' }, {
        onSetMod: {
            'js': {
                'inited': function() {
                    this.__base.apply(this, arguments);

                    var input = this.getControl();
                    if (this.hasMod('has-validation')) {
                        input.on('select', function() {
                            this.validate();
                        }.bind(this));

                        input.on('pick-date', function() {
                            this.validate();
                        }.bind(this));
                    }
                }
            }
        },
        setVal: function(val) {
            if (this.hasMod('has-validation')) {
                this._dirty = this._dirty || this.getVal() != val;
            }
            this.__base.apply(this, arguments);
        }
    }));
});
