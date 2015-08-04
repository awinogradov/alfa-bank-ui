modules.define('spec',
    ['spec__utils', 'input'],
    function(provide, helper) {

var build = helper.buildBlock;

describe('input_width_available', function() {

    var block, popup, menu;

    beforeEach(function() {
        block = build('input', {
            block: 'input',
            mods: { 'has-autocomplete': true, width: 'available' },
            name: 'input1',
            options: [
                { val: 'input1', content: 'Ищут вместе с исполнителями, которых вы слушаете 11111111111' },
                { val: 'input2', content: 'item 2' }
            ]
        });
        popup = block.findBlockInside('popup');
        menu = popup.findBlockInside('menu');
    });
    afterEach(function() {
        helper.destruct(block);
    });

    it('should menu max-width = width contol', function() {

        block.setMod('opened');

        popup.hasMod('visible').should.be.true;

        (block.domElem.outerWidth() === menu.domElem.width()).should.be.true;

    });

});

provide();

});
