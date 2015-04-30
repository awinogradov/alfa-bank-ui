modules.define('spec', ['spec__utils'], function(provide, helper) {

    describe('link_pseudo', function() {

        it('should set/get val', function() {
            var block = helper.buildBlock('link', {
                block : 'link',
                mods : { pseudo : true }
            });

            block.setVal('XXX');
            block.getVal().should.equal('XXX');

            helper.destruct(block);
        });
    });

    provide();
});
