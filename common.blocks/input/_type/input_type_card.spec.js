modules.define('spec', ['spec__utils', 'jquery__formatter', 'input'], function(provide, utils) {

    describe('input_has-mask', function() {

        it('should init without errors', function() {
            var block = utils.buildBlock('input', {
                block: 'input',
                mods: { type: 'card' }
            });

            utils.destruct(block);
        });

        it('should return value without spaces', function() {
            var block = utils.buildBlock('input', {
                block: 'input',
                mods: { type: 'card' },
                val: '0000 0000 0000 0000'
            });

            block.getVal().should.equal('0000000000000000');

            utils.destruct(block);
        });

    });

    provide();
});
