modules.define('spec', ['input', 'spec-helper'], function(provide, _, helper) {

    describe('input_type_link', function() {
        var input;

        beforeEach(function() {
            input = helper.buildBlock('input', {
                block : 'input',
                mods : { type : 'link' },
                val : 'inplace'
            });
        });

        afterEach(function() {
            helper.destruct(input);
        });

        // TODO fix test
        it.skip('should show input on click', function() {
            input.trigger('click');
            input.elem('box').elem('link').hasMod('hidden').should.be.true;
            input.elem('box').elem('input').hasMod('hidden').should.be.false;
        });

    });

    provide();

});
