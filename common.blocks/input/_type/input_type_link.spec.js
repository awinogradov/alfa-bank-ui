modules.define('spec', ['input', 'link', 'spec-helper'], function(provide, _, link,  helper) {

    describe('input_type_link', function() {
        var input;

        beforeEach(function() {
            input = helper.buildBlock('input', {
                block : 'input',
                mods : { type : 'link' },
                val : 'inplace',
                placeholder : 'placeholder'
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

        it('should set placeholder text to link when val is empty', function() {
            var link = input.findBlockInside('link');
            input.setVal('');
            link.domElem.text().should.equal('placeholder');
            input.setVal('some val');
            link.domElem.text().should.equal('some val');
            input.setVal('');
            link.domElem.text().should.equal('placeholder');
        });

        it('should set mod `empty` when val is empty', function() {
            (!!input.getMod('empty')).should.be.false;
            input.setVal('');
            input.getMod('empty').should.be.true;
            input.setVal('xxx');
            (!!input.getMod('empty')).should.be.false;
        });
    });

    provide();

});
