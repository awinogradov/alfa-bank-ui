modules.define('spec', ['spec__utils', 'form-field'], function(provide, utils) {

    describe('form-field_validate_email', function() {

        it('should not throw without has-validate', function() {
            var block = utils.buildBlock('form-field', {
                block : 'form-field',
                mods : {
                    validate : 'email'
                }
            });

            utils.destruct(block);
        });

        it('should add validate_email', function() {
            var block = utils.buildBlock('form-field', {
                block : 'form-field',
                mods : {
                    'has-validate' : true,
                    message : 'text',
                    validate : 'email'
                }
            });

            var v = block.getValidator();
            (!v.check('XXX')).should.be.false;
            (!v.check('user@domain.com')).should.be.true;

            utils.destruct(block);
        });

    });

    provide();

});
