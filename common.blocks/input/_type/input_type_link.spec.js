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
            //input.hasMod('focused').should.be.false;
            input._trigger.domElem.click();
            //input.elem('control').bem('control').hasMod('focused').should.be.true;
        });

    });

    provide();

});
