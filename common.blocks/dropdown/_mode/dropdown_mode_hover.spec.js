modules.define('spec',
    ['i-bem__dom', 'dropdown', 'jquery', 'BEMHTML'],
    function(provide, BEMDOM, Dropdown, $, BEMHTML) {

    describe('dropdown_mode_hover', function() {
        var bemjson = {
            block : 'dropdown',
            mods : { switcher : 'link', mode : 'hover' },
            switcher : { block : 'link', content : 'dropdown link' },
            content : { block : 'popup', content : 'popup content' }
        };

        var dropdown;

        beforeEach(function() {
            dropdown = buildDropdown(bemjson);
        });

        afterEach(function() {
            BEMDOM.destruct(dropdown.domElem);
        });

        it('should add mod "opened" on hover', function() {
            dropdown.hasMod('opened').should.be.false;
            dropdown.getSwitcher().domElem.mouseenter();
            dropdown.hasMod('opened').should.be.true;
        });

        it('should remove mod "opened" on mouseleave on popup', function() {
            dropdown.setMod('opened', true);
            dropdown.getPopup().domElem.mouseleave();
            dropdown.hasMod('opened').should.be.false;
        });
    });

    provide();

    function buildDropdown(bemjson) {
        return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body')).bem('dropdown');
    }

});
