modules.define('spec', ['spec__utils', 'jquery', 'dropdown', 'link'], function(provide, helper, $) {

    describe('dropdown_mode_hover', function() {
        var dropdown,
            bemjson = {
                block: 'dropdown',
                mods: { switcher: 'link', mode: 'hover' },
                switcher: { block: 'link', content: 'dropdown link' },
                popup: { block: 'popup', content: 'popup content' }
            };

        beforeEach(function() {
            dropdown = helper.buildBlock('dropdown', bemjson);
        });

        afterEach(function() {
            helper.destruct(dropdown);
        });

        it('should add mod "opened" on hover', function() {
            dropdown.hasMod('opened').should.be.false;
            dropdown.getSwitcher().domElem.mouseover();
            dropdown.hasMod('opened').should.be.true;
        });

        it('should remove mod "opened" on mouseleave on popup', function() {
            dropdown.getSwitcher().domElem.mouseover();
            dropdown.getPopup().domElem.mouseleave();
            dropdown.hasMod('opened').should.be.false;
        });
    });

    provide();

});
