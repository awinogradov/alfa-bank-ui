modules.define('spec', ['spec__utils', 'form-field', 'input', 'message', 'popup'], function(provide, utils) {

    describe('form-field_message_popup', function() {

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

        it('should be set directions to popup', function() {
            var popup = block.getMessage().getPopup();
            (popup.params.directions).should.be.eql(['right-top']);
        });

        it('should be set mod type_tooltip', function() {
            var popup = block.getMessage().getPopup();
            popup.getMod('type').should.be.eql('tooltip');
        });
    });

    provide();
});
