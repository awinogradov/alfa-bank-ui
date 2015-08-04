/* global console:false */

modules.define(
'form-test',
function(provide, FormTest) {

provide(FormTest.decl({
    onSetMod: {
        'js': {
            'inited': function() {
                console.log('has validation set');

                this._form = this.findBlockInside('form');

                this._form
                    .on('submit', function(e, data) {
                        if (e.target.getStatus()) { // OK
                            console.log('form valid', data);
                        } else {                   // Например покажем невалидные поля формы
                            console.log('form invalid', data);
                            console.log('invalid fields', this._form.getInvalidFields());
                        }
                    }, this);

            }
        }
    }
}));

});
