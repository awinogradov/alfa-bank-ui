modules.define('spec', ['collapse', 'spec__utils'], function(provide, collapse, utils) {

    var el = 'Скрыть подробности',
        cl = 'Подробнее',
        bemjson = {
            block: 'collapse',
            mods: { theme: 'alfa', bkg: 'color' },
            expandedLabel: el,
            collapsedLabel: cl,
            content: ['Подробности...']
        };

    describe('collapse', function() {

        var block;

        beforeEach(function() {
            block = utils.buildBlock('collapse', bemjson);
        });

        afterEach(function() {
            utils.destruct(block);
        });

        it('should render content', function() {
            block.elem('content').length.should.equal(1);
            block.elem('link').length.should.equal(1);
        });

        it('should pass `theme` and `bkg` mods to link', function() {
            var link = block.findBlockInside('link');
            link.getMod('theme').should.equal('alfa');
            link.getMod('bkg').should.equal('color');
        });

        it('should set link label to `collapsedLabel` in collapsed state', function() {
            block.delMod('expanded');
            var link = block.findBlockInside('link');
            link.should.not.be.null;
            link.domElem.text().should.equal(cl);
        });

        it('should set link label to `expandedLabel` in expanded state', function() {
            block.setMod('expanded', true);
            var link = block.findBlockInside('link');
            link.should.not.be.null;
            link.domElem.text().should.equal(el);
        });

        it('should set link label to `expandedLabel` when rendered with `expanded` mod', function() {
            bemjson.mods.expanded = true;
            var block = utils.buildBlock('collapse', bemjson),
                link = block.findBlockInside('link');
            link.domElem.text().should.equal(el);

            utils.destruct(block);
            delete bemjson.mods.expanded;
        });

        it('should toggle `expanded` mode on link click', function() {
            block.delMod('expanded');
            var link = block.findBlockInside('link');
            link.domElem.click();
            block.getMod('expanded').should.be.true;
            link.domElem.click();
            block.getMod('expanded').should.equal('');
        });
    });

    provide();

});
