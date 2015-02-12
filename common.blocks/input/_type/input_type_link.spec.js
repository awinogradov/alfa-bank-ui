modules.define('spec', ['input', 'link', 'spec-helper'], function(provide, _, link,  helper) {

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

        it('should show input on click', function() {
            input._trigger.domElem.click();
            input.hasMod('focused').should.be.true;
        });

        it('should work getVal()', function() {
            input.getVal().should.equal('inplace');
        });

        it('should work setVal()', function() {
            input.setVal('new_val');
            input.getVal().should.equal('new_val');
            input.findBlockInside('link').domElem.text().should.equal('new_val');
        });

    });

    provide();

});
