modules.define('spec', ['spec__utils', 'jquery__numeric', 'input'], function(provide, utils, $) {

    describe('input_type_money', function() {

        it('should init without errors', function() {
            var block = utils.buildBlock('input', {
                block: 'input',
                mods: { type: 'money' }
            });

            utils.destruct(block);
        });

        it('should return value without comma', function() {
            var block = utils.buildBlock('input', {
                block: 'input',
                mods: { type: 'money' },
                val: '1,23'
            });

            block.getVal().should.equal('1.23');

            utils.destruct(block);
        });

        it('should insert comma instead of period', function() {
            var block, el;

            block = utils.buildBlock('input', {
                block: 'input',
                mods: { type: 'money' },
                val: '1'
            });
            el = block.elem('control');

            el.focus();
            el.trigger(new $.Event('keyup', { keyCode: 190 }));
            el.trigger(new $.Event('keyup', { keyCode: 65 })); // 'a'
            el.val().should.equal('1,');

            utils.destruct(block);
        });

    });

    provide();
});
