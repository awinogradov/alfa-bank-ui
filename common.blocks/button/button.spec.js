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

    describe('button_cheched', function() {
        it('should be set view_* mod if checked mod set', function() {
            bemjson = { block: 'button', mods: { view: 'ololo' } };
            block = utils.buildBlock('button', bemjson);
            block.params.checkedView.should.be.equal('ololo');
            block.setMod('checked');
            block.getMod('view').should.be.equal('ololo');
        });

        it('should be del view_* mod if checked event', function() {
            bemjson = { block: 'button', mods: { checked: true, view: 'ololo' } };
            block = utils.buildBlock('button', bemjson);
            block.getMod('view').should.be.equal('ololo');
            block.delMod('checked');
            block.getMod('view').should.be.equal('');
        });
    });
});

provide();

});

