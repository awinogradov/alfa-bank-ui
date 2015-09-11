modules.define('spec', ['spec__utils', 'popup'], function(provide, utils) {

    describe('popup_height_available', function() {

        it('should init', function() {
            var block, anchor;

            block = utils.buildBlock('popup', {
                block: 'popup',
                mods: {
                    height: 'available',
                    target: 'anchor'
                },
                content: 'some content'
            });
            anchor = utils.buildBlock('anchor', { block: 'anchor' });

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
