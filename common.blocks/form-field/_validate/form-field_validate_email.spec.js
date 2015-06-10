modules.define('spec', ['spec__utils', 'form-field'], function(provide, utils) {

    describe('form-field_validate_email', function() {

        it('should add validate_email', function() {
            var block, v;
            block = utils.buildBlock('form-field', {
                block: 'form-field',
                mods: {
                    'has-validation': true,
                    message: 'text',
                    validate: 'email'
                }
            });
            v = block.getValidator();

            (!v.check('XXX')).should.be.false;
            (!v.check('user@domain.com')).should.be.true;

            utils.destruct(block);
        });

    });

    provide();

});
