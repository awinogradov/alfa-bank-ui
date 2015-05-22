var expect = chai.expect;

modules.define('spec',
    ['spec__utils', 'jquery', 'select'],
    function(provide, helper, $, Select) {

var build = helper.buildBlock;

describe('select_width_available', function() {

    var block, button, popup, menu;

    beforeEach(function() {
        block = build('select', {
            block: 'select',
            mods: { mode: 'radio-check', width: 'available' },
            name: 'select1',
            val: 1,
            options: [
                { val: 1, content: 'Ищут вместе с исполнителями, которых вы слушаете 11111111111' },
                { val: 2, content: 'item 2' }
            ]
        });
        button = block.findBlockInside('button');
        popup = block.findBlockInside('popup');
        menu = popup.findBlockInside('menu');
    });

    afterEach(function() {
        helper.destruct(block);
    });

    it('should menu max-width = width contol', function() {

        block.setMod('opened')
            .hasMod('focused')
            .should.be.true;

        popup.hasMod('visible').should.be.true;

        (button.domElem.outerWidth() === menu.domElem.width()).should.be.true;
    });

});

provide();

});
