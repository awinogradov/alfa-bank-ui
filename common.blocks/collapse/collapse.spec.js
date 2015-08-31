modules.define('spec', ['collapse', 'spec__utils', 'link'], function(provide, collapse, utils, link) {

    var el = 'Скрыть подробности',
        cl = 'Подробнее';

    describe('collapse', function() {

        var block,
            bemjson;

        beforeEach(function() {
            bemjson = {
                block: 'collapse',
                mods: { theme: 'alfa-on-color' },
                expandedLabel: el,
                collapsedLabel: cl,
                content: ['Подробности...']
            }
            block = utils.buildBlock('collapse', bemjson);
        });

        afterEach(function() {
            utils.destruct(block);
        });

        it('should render content', function() {
            block.elem('content').length.should.equal(1);
            block.elem('link').length.should.equal(1);
        });

        it('should pass `theme` mods to link', function() {
            block._link.getMod('theme').should.equal('alfa-on-color');
        });

        it('should set link label to `collapsedLabel` in collapsed state', function() {
            block._link.should.not.be.null;
            block._link.getVal().should.equal(cl);
        });

        it('should set link label to `expandedLabel` in expanded state', function() {
            block.setMod('expanded', true);
            block._link.should.not.be.null;
            block._link.getVal().should.equal(el);
        });

        it('should set link label to `expandedLabel` when rendered with `expanded` mod', function() {
            bemjson.mods.expanded = true;
            block = utils.buildBlock('collapse', bemjson);
            block._link.getVal().should.equal(el);
        });

        it('should toggle `expanded` mode on link click', function() {
            block._link.domElem.click();
            block.getMod('expanded').should.be.true;
            block._link.domElem.click();
            block.getMod('expanded').should.equal('');
        });
    });

    provide();

});
