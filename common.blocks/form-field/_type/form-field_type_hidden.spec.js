modules.define('spec', ['form-field', 'spec-helper'], function(provide, _, helper) {

    describe('form-field_type_hidden', function() {

        var block;

        beforeEach(function() {
            block = helper.buildBlock('form-field', {
                block : 'form-field',
                mods : { type : 'hidden' },
                name : 'field name',
                val : 'field value'
            });
        });

        afterEach(function() {
            helper.destruct(block);
        });

        it('should return value on getVal', function() {
            block.getVal().should.equal('field value');
        });

        it('should allow to change value', function() {
            block.setVal('new val');
            block.getVal().should.equal('new val');
        });

        it('should get name from params', function() {
            block.getName().should.equal('field name');
        });
    });

    provide();

});
