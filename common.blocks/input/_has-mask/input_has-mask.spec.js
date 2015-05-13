modules.define('spec', ['spec__utils', 'jquery__formatter', 'input'], function(provide, utils, $) {

    describe('input_has-mask', function() {

        it('should init without errors', function() {
            var block = utils.buildBlock('input', {
                block : 'input',
                mods : {
                    'has-mask' : true
                },
                js : {
                    mask : '{{99}}-{{99}}'
                }
            });

            // smoke test

            utils.destruct(block);
        });

        // TODO: add more useful tests
    });

    provide();
});
