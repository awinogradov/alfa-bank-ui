/* global modules:false */

/**
 * @spec input_type_tel
 */

modules.define(
    'spec',
    ['spec__utils', 'jquery', 'input', 'jquery__formatter'],
    function(provide, utils) {

describe('input_type_tel', function() {
    var input,
        bemjson = {
            block: 'input',
            mods: { type: 'tel' }
        };

    beforeEach(function() {
        input = utils.buildBlock('input', bemjson);
    });

    afterEach(function() {
        utils.destruct(input);
    });

});

provide();

});
