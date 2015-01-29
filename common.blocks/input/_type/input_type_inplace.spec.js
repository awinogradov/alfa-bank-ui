modules.define('spec', ['input', 'i-bem__dom', 'jquery', 'BEMHTML'], function(provide, Input, BEMDOM, $, BEMHTML) {

    describe('input_type_inplace', function() {
        var input;

        beforeEach(function() {
            input = buildInput();
        });

        afterEach(function() {
            BEMDOM.destruct(input.domElem);
        });

        it('should show input on click', function() {
            input.trigger('click');
            input.elem('box').elem('link').hasMod('hidden').should.be.true;
            input.elem('box').elem('input').hasMod('hidden').should.be.false;
        });
    });

    function buildInput() {
        return BEMDOM.init(
            $(BEMHTML.apply({
                block : 'input',

                val : 'inplace'
            })))
            .appendTo('body')
            .bem('input');
    }

    provide();

});
