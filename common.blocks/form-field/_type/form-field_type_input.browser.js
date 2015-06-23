modules.define('form-field', function(provide, FormField) {

    provide(FormField.decl({ modName: 'type', modVal: 'input' }, {
        onSetMod: {
            'js': {
                'inited': function() {
                    this.__base.apply(this, arguments);

                    var input = this.getControl();
                    if (this.hasMod('has-validation') && input.hasMod('has-autocomplete')) {
                        input.on('select', function() {
                            this.validate();
                        }.bind(this));
                    }
                }
            }
        }

    }));
});
