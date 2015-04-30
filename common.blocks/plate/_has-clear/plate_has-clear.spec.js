modules.define('spec', ['plate', 'spec__utils'], function(provide, _, utils) {

    describe('plate_has-clear', function() {
        var plate;

        beforeEach(function() {
            plate = utils.buildBlock('plate', {
                block : 'plate',
                mods : { theme : 'alfa', bkg : 'color', 'has-clear' : true }
            });
        });

        afterEach(function() {
            utils.destruct(plate);
        });

        it('should hide plate on click', function() {
            plate.elem('clear').click();
            plate.hasMod('hidden').should.be.true;
        });
    });

    provide();

});
