modules.define('spec', ['spec__utils', 'form-field', 'input', 'message'], function(provide, utils) {

    describe('form-field_type_input', function() {

        var block, bemjson;

        bemjson = {
            block: 'form-field',
            mods: { type: 'input', 'has-validation': true, message: 'text'},
            content: [
                {
                    block: 'input',
                    options: [],
                    mods: {
                        'has-autocomplete': true
                    }
                }
            ]
        };

        beforeEach(function() {
            block = utils.buildBlock('form-field', bemjson);
        });

        afterEach(function() {
            utils.destruct(block);
        });

        it('should call validate function on select event on input', function() {
            var input = block.getControl();
            var spyOnValidate = sinon.spy(block, 'validate');
            input.emit('select');
            spyOnValidate.called.should.be.true;
        });

        it('should call validate function on pick-date event on input', function() {
            var input = block.getControl();
            var spyOnValidate = sinon.spy(block, 'validate');
            input.emit('pick-date');
            spyOnValidate.called.should.be.true;
        });
    });

    provide();
});
