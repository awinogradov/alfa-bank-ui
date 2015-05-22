modules.define('spec', ['dropdown', 'spec__utils'], function(provide, _, helper) {

    describe('dropdown_mode_hover', function() {
        var dropdown,
            bemjson = {
                block: 'dropdown',
                mods: { switcher: 'link', mode: 'hover' },
                switcher: { block: 'link', content: 'dropdown link' },
                content: { block: 'popup', content: 'popup content' }
            };

        beforeEach(function() {
            dropdown = helper.buildBlock('dropdown', bemjson);
        });

        afterEach(function() {
            helper.destruct(dropdown);
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

});
