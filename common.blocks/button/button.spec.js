/* global modules:false */

/**
 * @spec button
 */

modules.define(
    'spec',
    ['button', 'i-bem__dom', 'jquery', 'BEMHTML', 'sinon', 'spec__utils'],
    function(provide, Button, BEMDOM, $, BEMHTML, sinon, utils) {

describe('button', function() {
    var block,
        bemjson;

    beforeEach(function() {
        bemjson = { block: 'button' };
        block = utils.buildBlock('button', bemjson);
    });

    afterEach(function() {
        utils.destruct(block);
    });

    describe('mode icon', function() {
        it('should be has elem `icon`', function() {
            bemjson = { block: 'button', icon: { block: 'icon' } };
            block = utils.buildBlock('button', bemjson);

            block.findElem('icon')
                .hasClass('button__icon')
                .should.be.true;
        });
    });
});

provide();

});

