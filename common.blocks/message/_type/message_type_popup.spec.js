modules.define('spec', ['spec__utils', 'message', 'popup'], function(provide, utils) {

    describe('message_type_popup', function() {

        var block;

        beforeEach(function() {
            block = utils.buildBlock('message', {
                block: 'message',
                mods: {
                    type: 'popup',
                }
            });
        });

        afterEach(function() {
            block && utils.destruct(block);
        });

        it('should pass mod 'invalid' to popup', function() {
            block._popup.hasMod('invalid').should.be.false;
            block.setMod('invalid');
            block._popup.hasMod('invalid').should.be.true;
            block.delMod('invalid');
            block._popup.hasMod('invalid').should.be.false;
        });
    });

    provide();
});
