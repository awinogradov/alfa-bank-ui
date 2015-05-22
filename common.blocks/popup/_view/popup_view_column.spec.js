modules.define('spec', ['spec__utils', 'popup'], function(provide, utils) {

    describe('popup_view_column', function() {

        it('should init', function() {
            var block = utils.buildBlock('popup', {
                block: 'popup',
                mods: {
                    view: 'column',
                    target: 'anchor'
                },
                content: 'some content'
            });

            var anchor = utils.buildBlock('anchor', { block: 'anchor' });

            block.domElem.text().should.equal('some content');

            block.setAnchor(anchor);
            block.setMod('visible');
            block.redraw();

            utils.destruct(block);
            utils.destruct(anchor);
        });

    });

    provide();
});
