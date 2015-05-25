modules.define('spec', ['spec__utils', 'tooltip', 'popup'], function(provide, utils) {

    describe('tooltip', function() {

        var block;

        beforeEach(function() {
            block = utils.buildBlock('tooltip', {
                block: 'tooltip',
                content: 'content'
            });
        });

        afterEach(function() {
            utils.destruct(block);
        });

        it('should contain block `popup`', function() {
            (!!block.findBlockInside('popup')).should.be.true;
        });

        it('should show/hide popup on hover', function() {
            block._popup.hasMod('visible').should.be.false;
            block.setMod('hovered');
            block._popup.hasMod('visible').should.be.true;
            block.delMod('hovered');
            block._popup.hasMod('visible').should.be.false;
        });

    });

    provide();
});
