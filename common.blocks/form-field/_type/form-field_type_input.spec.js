modules.define('spec', ['spec__utils', 'sinon', 'form-field', 'input', 'message'], function(provide, utils, sinon) {

    describe('form-field_type_input', function() {

        var block;
        var assert = chai.assert;

        var bemjsonForEventTests = {
            block: 'form-field',
            mods: { type: 'input', 'has-validation': true, message: 'text' },
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

        it('should call validate function on select event on input', function() {
            block = utils.buildBlock('form-field', bemjsonForEventTests);
            var input = block.getControl();
            var spyOnValidate = sinon.spy(block, 'validate');
            input.emit('select');
            spyOnValidate.called.should.be.true;
        });

        it('should call validate function on pick-date event on input', function() {
            block = utils.buildBlock('form-field', bemjsonForEventTests);
            var input = block.getControl();
            var spyOnValidate = sinon.spy(block, 'validate');
            input.emit('pick-date');
            spyOnValidate.called.should.be.true;
        });

        it('should mark itself dirty on setVal if with modifier has-validation', function() {
            block = utils.buildBlock('form-field', {
                block: 'form-field',
                mods: { type: 'input', 'has-validation': true },
                val: 'field value',
                content: [
                    {
                        block: 'input'
                    }
                ]
            });
            block.getDirty().should.be.false;
            block.setVal('hi there');
            block.getDirty().should.be.true;
        });

        it('should do not mark itself dirty if without modifier has-validation', function() {
            block = utils.buildBlock('form-field', {
                block: 'form-field',
                mods: { type: 'input' },
                val: 'field value',
                content: [
                    {
                        block: 'input'
                    }
                ]
            });
            block.setVal('hi there');
            assert.isUndefined(block._dirty);
        });
    });

    provide();
});
