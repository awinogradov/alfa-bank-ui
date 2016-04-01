modules.define('spec', ['spec__utils', 'dropdown', 'link', 'popup'], function(provide, helper) {

    describe('dropdown_mode', function() {
        var dropdown,
            bemjson = {
                block: 'dropdown',
                mods: { switcher: 'link', mode: true },
                switcher: {
                    block: 'link',
                    content: 'dropdown link'
                },
                popup: 'popup content'
            };

        beforeEach(function() {
            dropdown = helper.buildBlock('dropdown', bemjson);
        });

        afterEach(function() {
            helper.destruct(dropdown);
        });

        it('should init if switcher block inited', function() {
            dropdown.getSwitcher().setMod('hovered');
            dropdown.getMod('js').should.be.eql('inited');
        });
    });

    provide();

});
