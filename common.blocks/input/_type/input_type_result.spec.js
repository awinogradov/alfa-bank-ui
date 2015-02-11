modules.define('spec', ['input', 'spec-helper'], function(provide, _, helper) {

    describe('input_type_result', function() {
        var input;

        beforeEach(function() {
            input = helper.buildBlock('input', {
                block : 'input',
                mods : { type : 'result' },
                val : 'result_before'
            });
        });

        afterEach(function() {
            helper.destruct(input);
        });

        it('should work getVal()', function() {
            input.getVal().should.equal('result_before');
        });

        it('should work setVal()', function() {
            input.setVal('new_val');
            input.getVal().should.equal('new_val');
            input.elem('result').text().should.equal('new_val');
        });

    });

    provide();

});
