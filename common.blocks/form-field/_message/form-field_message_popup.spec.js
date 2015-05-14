modules.define('spec', ['spec__utils', 'form-field', 'message', 'popup', 'input'], function(provide, utils) {

    describe('form-field_message_popup', function() {

        var block;

        beforeEach(function() {
            block = utils.buildBlock('form-field', {
                block : 'form-field',
                mods : {
                    type : 'input',
                    message : 'popup'
                },
                content : {
                    block : 'input'
                }
            });
        });

        afterEach(function() {
            block && utils.destruct(block);
        });

        it('should show message on focus', function() {
            var spy = sinon.spy(block.getMessage(), 'show');

            // without invalid
            block.setMod('focused');
            block.delMod('focused');
            (!!spy.called).should.be.false;

            // with invalid
            block.setMod('invalid');
            block.setMod('focused');
            block.delMod('focused');
            (!!spy.called).should.be.true;
        });

        it('should hide message on blur', function() {
            var spy = sinon.spy(block.getMessage(), 'hide');

            block.setMod('focused');
            block.delMod('focused');
            (!!spy.called).should.be.true;
        });

        it('should set popup`s anchor to input', function() {
            var anchor = block.getMessage()._popup._anchor;
            (!!anchor).should.be.true;
            anchor.attr('class').should.equal(block.getControl().domElem.attr('class'));
        });
    });

    provide();
});
