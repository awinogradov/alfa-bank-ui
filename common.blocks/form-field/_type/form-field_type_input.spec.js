modules.define('spec', ['spec__utils', 'form-field', 'input'], function(provide, utils) {

    describe('form-field_type_input', function() {

        var block, bemjson;

        bemjson = {
            block: 'form-field',
            mods: { type: 'input', 'has-validation': true },
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

        it('should call validate function on select event', function() {
            var input = block.getControl();
            var spyOnValidate = sinon.spy(block, 'validate');
            input.emit('select');
            spyOnValidate.calledshould.be.true;
        });
    });

    provide();
});
