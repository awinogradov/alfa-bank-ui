var expect = chai.expect;

modules.define('spec',
    ['i-bem__dom', 'input', 'jquery', 'BEMHTML'],
    function(provide, BEMDOM, Dropdown, $, BEMHTML) {

    describe('input_autocomplete', function() {
        var bemjson = {
            block : 'input',
            mods : { autocomplete : true },
            options : []
        };

        var block;

        afterEach(function() {
            BEMDOM.destruct(block.domElem);
        });

        it('should have `control` and `box` elements', function() {
            block = build(bemjson);
            expect(block.elem('box')).to.not.be.null;
            expect(block.elem('control')).to.not.be.null;
        });

        it('should add `popup` block to `box` element', function() {
            block = build(bemjson);
            var popup = block.findBlockInside('popup');

            expect(popup).to.not.be.null;
        });

        it('should pass `theme`, `bkg` and `size` mods to `popup`', function() {
            bemjson.mods.theme = 'xxx';
            bemjson.mods.bkg = 'yyy';
            bemjson.mods.size = 'm';
            block = build(bemjson);
            var popup = block.findBlockInside('popup');

            popup.getMod('theme').should.equal('xxx');
            popup.getMod('bkg').should.equal('yyy');
            popup.getMod('size').should.equal('m');
        });

        it('should pass `theme`, `bkg` and `size` mods to `menu`', function() {
            bemjson.mods.theme = 'xxx';
            bemjson.mods.bkg = 'yyy';
            bemjson.mods.size = 'm';
            block = build(bemjson);
            var menu = block.findBlockInside('menu');

            menu.getMod('theme').should.equal('xxx');
            menu.getMod('bkg').should.equal('yyy');
            menu.getMod('size').should.equal('m');
        });

        it('should set popup`s anchor', function() {
            block = build(bemjson);
            var popup = block.findBlockInside('popup');

            popup._anchor.should.equal(block.domElem);
        });

        it('should add block `menu` in `popup`', function() {
            block = build(bemjson);
            var menu = block.findBlockInside('popup').findBlockInside('menu');

            expect(menu).to.not.be.null;
        });

        it('should pass `theme` and `bkg` mods to `menu`', function() {
            bemjson.mods.theme = 'xxx';
            bemjson.mods.bkg = 'yyy';
            block = build(bemjson);
            var menu = block.findBlockInside('popup').findBlockInside('menu');

            menu.getMod('theme').should.equal('xxx');
            menu.getMod('bkg').should.equal('yyy');
        });

        it('should add options as `menu-item`s', function() {
            bemjson.options = [
                { val : 'value 1', content : 'item 1' },
                { val : 'value 2', content : 'item 2' }
            ];
            block = build(bemjson);
            var menu = block.findBlockInside('popup').findBlockInside('menu');
            var items = menu.findBlocksInside('menu-item');

            expect(items).to.not.be.null;
            items.length.should.equal(2);
            items[0].getVal().should.equal('value 1');
            items[0].domElem.text().should.equal('item 1');
            items[1].getVal().should.equal('value 2');
            items[1].domElem.text().should.equal('item 2');
        });

        it('should add mod `opened` on focus', function() {
            bemjson.options = [
                { val : 'value 1', content : 'item 1' },
                { val : 'value 2', content : 'item 2' }
            ];
            block = build(bemjson);

            block.getMod('opened').should.equal('');
            block.elem('control').trigger('focus');
            block.getMod('opened').should.be.true;
            block.elem('control').trigger('blur');
            block.getMod('opened').should.equal('');
        });

        it('should show popup when `opened`', function() {
            bemjson.options = [
                { val : 'value 1', content : 'item 1' },
                { val : 'value 2', content : 'item 2' }
            ];
            block = build(bemjson);
            var popup = block.findBlockInside('popup');
            popup.getMod('visible').should.equal('');
            block.setMod('opened');
            popup.getMod('visible').should.be.true;
            block.delMod('opened');
            popup.getMod('visible').should.equal('');
        });

        it('should set value on item click', function() {
            bemjson.options = [
                { val : 'value 1', content : 'item 1' },
                { val : 'value 2', content : 'item 2' }
            ];
            block = build(bemjson);
            block.setVal('value 0');
            var menu = block.findBlockInside('menu');
            // click on item
            menu.findBlocksInside('menu-item')[1].domElem.click();

            block.getVal().should.equal('value 2');
        });

        it('should close popup when item selected', function() {
            bemjson.options = [
                { val : 'value 1', content : 'item 1' },
                { val : 'value 2', content : 'item 2' }
            ];
            block = build(bemjson);
            var menu = block.findBlockInside('menu'),
                popup = block.findBlockInside('popup');

            block.setMod('focused');
            popup.getMod('visible').should.be.true;
            // click on item
            menu.findBlocksInside('menu-item')[1].domElem.click();

            popup.getMod('visible').should.equal('');
        });
    });

    provide();

    function build(bemjson) {
        return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body')).bem('input');
    }

});
