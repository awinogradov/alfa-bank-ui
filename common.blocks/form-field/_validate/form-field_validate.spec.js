modules.define('spec', ['spec__utils', 'form-field'], function(provide, utils) {

    var expect = chai.expect;

    describe('form-field_validate', function() {

        it('should throw without has-validate', function() {
            var blockFn = utils.buildBlock.bind(this, 'form-field', {
                block : 'form-field',
                mods : {
                    validate : 'email'
                }
            });

            expect(blockFn).to.throw(Error);
        });

    });

    provide();

});
