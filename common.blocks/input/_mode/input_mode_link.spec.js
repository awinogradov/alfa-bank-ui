modules.define('spec',
    ['input', 'link', 'spec-helper'],
    function(provide, _, link,  helper) {

describe('input_mode_link', function() {
    var input;

    beforeEach(function() {
        input = helper.buildBlock('input', {
            block : 'input',
            mods : { mode : 'link' },
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
        var link = input._trigger.domElem;
        input.setVal('');
        link.text().should.equal('placeholder');
        input.setVal('some val');
        link.text().should.equal('some val');
        input.setVal('');
        link.text().should.equal('placeholder');

        // blur should not reset link text
        input.setMod('focused');
        input.delMod('focused');
        link.text().should.equal('placeholder');
    });

    it('should set placeholder text to empty string, when placeholder is not specified', function() {
        var input = helper.buildBlock('input', {
            block : 'input',
            mods : { mode : 'link' },
            val : 'inplace'
        });

        input.getPlaceholder().should.equal('');

        helper.destruct(input);
    });

    it('should set mod `empty` when val is empty', function() {
        (!!input.getMod('empty')).should.be.false;
        input.setVal('');
        input.getMod('empty').should.be.true;
        input.setVal('xxx');
        (!!input.getMod('empty')).should.be.false;
    });

    it('should toggle focused mod on ENTER key', function() {
        var link = input._trigger.domElem;
        link.focus();
        input.getMod('focused').should.equal('');
        link.trigger($.Event('keyup', { keyCode : 13 }));
        input.getMod('focused').should.equal(true);
        link.trigger($.Event('keyup', { keyCode : 13 }));
        input.getMod('focused').should.equal('');
        // other random key
        link.trigger($.Event('keyup', { keyCode : 67 }));
        input.getMod('focused').should.equal('');
    });
});

provide();

});
