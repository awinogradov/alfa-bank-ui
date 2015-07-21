modules.define(
'form-test',
function(provide, FormTest) {

provide(FormTest.decl({
    onSetMod: {
        'js': {
            'inited': function() {
                console.log('default set');

                this._form = this.findBlockInside('form');

                // обрабатываем форму "топорным" способом
                this._form.bindTo('submit', function(e) {
                    e.preventDefault(); // c модификатором has-validation не нужно останавнилать событие
                    console.log('on submit', this._form.getVal());
                }.bind(this));
            }
        }
    }
}));

});
