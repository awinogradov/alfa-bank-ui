modules.define('spec', ['spec__utils', 'form', 'input', 'message', 'popup'], function(provide, utils) {

    describe('form', function() {

        var block,
            bemjson;

        beforeEach(function() {
            bemjson = {
                block: 'form',
                content: [
                    {
                        block: 'form-field',
                        mods: {
                            type: 'input',
                            'has-validation': true,
                            message: 'popup'
                        },
                        name: 'test',
                        content: [
                            {
                                block: 'input'
                            }
                        ]
                    }
                ]
            };

            block = utils.buildBlock('form', bemjson);
        });

        it('should be submit valid form', function(done) {
            block.on('submit', function() {
                setTimeout(function() {
                    block.getInvalidFields().then(function(invalidFields) {
                        (invalidFields).should.eql([]);
                        done();
                    });
                }, 200);
            });

            block.domElem.trigger('submit');
        });

        it('should be set focus in first invalid field and show message', function(done) {
            bemjson.mods = {
                message: 'text'
            };

            bemjson.content.push({
                block: 'form-field',
                mods: {
                    type: 'input',
                    'has-validation': true,
                    message: 'popup',
                    required: true
                },
                name: 'test2',
                js: {
                    required: {
                        message: 'Обязательное поле'
                    }
                },
                content: [
                    {
                        block: 'input'
                    }
                ]
            });
            block = utils.buildBlock('form', bemjson);

            block.on('submit', function() {
                setTimeout(function() {
                    block.getInvalidFields().then(function(invalidFields) {
                        (invalidFields[0].getName()).should.eql('test2');
                        (invalidFields[0].getControl().getMod('focused')).should.true;
                        done();
                    });
                }, 200);
            });

            block.domElem.trigger('submit');
        });
    });

    provide();
});
