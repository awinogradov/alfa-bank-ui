modules.define('spec', ['spec__utils', 'form-field', 'input', 'message', 'popup'], function(provide, utils) {

    describe('form-field', function() {

        var block;

        beforeEach(function() {
            block = utils.buildBlock('form-field', {
                block: 'form-field',
                mods: { type: 'input', 'has-validation': true, message: 'popup' },
                name: 'test',
                content: [
                    {
                        block: 'input'
                    }
                ]
            });
        });

        it('should not show message on focus default field', function() {
            var popup = block.getMessage().getPopup();

            block.setMod('focused');

            (popup.getMod('visible')).should.be.eql('');
        });

        it('should show message on focus invalid field', function() {
            var popup = block.getMessage().getPopup();

            block.setMod('invalid');
            block.setMod('focused');

            (popup.getMod('visible')).should.be.true;
        });

        it('should hide message on delete focused mods for invalid field', function() {
            var popup = block.getMessage().getPopup();

            block.setMod('invalid');
            block.setMod('focused');

            (popup.getMod('visible')).should.be.true;

            block.delMod('focused');

            (popup.getMod('visible')).should.be.eql('');
        });

    });

    provide();
});
