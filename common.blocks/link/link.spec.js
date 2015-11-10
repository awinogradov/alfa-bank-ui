/* global modules:false */

/**
 * @spec link
 */

modules.define(
    'spec',
    ['link', 'i-bem__dom', 'jquery', 'BEMHTML', 'sinon', 'spec__utils'],
    function(provide, Link, BEMDOM, $, BEMHTML, sinon, utils) {

describe('link', function() {
    var block,
        bemjson;

    beforeEach(function() {
        bemjson = { block: 'link' };
        block = utils.buildBlock('link', bemjson);
    });

    afterEach(function() {
        utils.destruct(block);
    });

    describe('dom', function() {

        it('content custom', function() {
            bemjson.content = { cls: 'cls', content: 'custom' };
            block = utils.buildBlock('link', bemjson);

            block.domElem
                .find('.cls')
                .hasClass('cls')
                .should.be.true;

            block.domElem
                .find('.link__text')
                .hasClass('link__text')
                .should.be.false;

            block.domElem
                .find('.link__icon')
                .hasClass('link__icon')
                .should.be.false;
        });

        it('mode text', function() {
            bemjson.text = 'text';
            block = utils.buildBlock('link', bemjson);

            block.findElem('text')
                .text()
                .should.be.equal('text');
        });

        it('mode icon', function() {
            bemjson.icon = { block: 'icon' };
            block = utils.buildBlock('link', bemjson);
            block.findElem('icon')
                .hasClass('link__icon')
                .should.be.true;
        });
    });
});

provide();

});
