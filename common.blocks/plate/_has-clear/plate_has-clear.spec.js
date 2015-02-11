modules.define('spec', ['plate', 'i-bem__dom', 'jquery', 'BEMHTML'], function(provide, Plate, BEMDOM, $, BEMHTML) {

describe('plate_has-clear', function() {
    var plate;

    beforeEach(function() {
        plate = buildPlate();
    });

    afterEach(function() {
        BEMDOM.destruct(plate.domElem);
    });

    it('should hide plate on click', function() {
        plate.elem('clear').click();
        plate.hasMod('hidden').should.be.true;
    });
});

function buildPlate() {
    return BEMDOM.init(
            $(BEMHTML.apply({
                block : 'plate',
                mods : { theme : 'alfa', bkg : 'color', 'has-clear' : true }
            })))
        .appendTo('body')
        .bem('plate');
}

provide();

});
