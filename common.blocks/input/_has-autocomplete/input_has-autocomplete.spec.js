var expect = chai.expect;

modules.define('spec',
    ['jquery', 'spec__utils'],
    function(provide, $, helper) {

var build = helper.buildBlock;

describe('input_has-autocomplete', function() {
    var bemjson = {
        block : 'input',
        mods : { 'has-autocomplete' : true },
        options : []
    };

    var block;

    afterEach(function() {
        helper.destruct(block);
    });

    it('should have `control` and `box` elements', function() {
        block = build('input', bemjson);
        expect(block.elem('box')).to.not.be.null;
        expect(block.elem('control')).to.not.be.null;
    });

    it('should add `popup` block to `box` element', function() {
        block = build('input', bemjson);
        var popup = block.findBlockInside('popup');

        expect(popup).to.not.be.null;
    });

    it('should pass `theme`, `bkg` and `size` mods to `popup`', function() {
        bemjson.mods.theme = 'xxx';
        bemjson.mods.bkg = 'yyy';
        bemjson.mods.size = 'm';
        block = build('input', bemjson);
        var popup = block.findBlockInside('popup');

        popup.getMod('theme').should.equal('xxx');
        popup.getMod('bkg').should.equal('yyy');
        popup.getMod('size').should.equal('m');
    });

    it('should pass `theme`, `bkg` and `size` mods to `menu`', function() {
        bemjson.mods.theme = 'xxx';
        bemjson.mods.bkg = 'yyy';
        bemjson.mods.size = 'm';
        block = build('input', bemjson);
        var menu = block.findBlockInside('menu');

        menu.getMod('theme').should.equal('xxx');
        menu.getMod('bkg').should.equal('yyy');
        menu.getMod('size').should.equal('m');
    });

    it('should set popup`s anchor', function() {
        block = build('input', bemjson);
        var popup = block.findBlockInside('popup');

        popup._anchor.should.equal(block.domElem);
    });

    it('should add block `menu` in `popup`', function() {
        block = build('input', bemjson);
        var menu = block.findBlockInside('popup').findBlockInside('menu');

        expect(menu).to.not.be.null;
    });

    it('should pass `theme` and `bkg` mods to `menu`', function() {
        bemjson.mods.theme = 'xxx';
        bemjson.mods.bkg = 'yyy';
        block = build('input', bemjson);
        var menu = block.findBlockInside('popup').findBlockInside('menu');

        menu.getMod('theme').should.equal('xxx');
        menu.getMod('bkg').should.equal('yyy');
    });

    it('should add options as `menu-item`s', function() {
        bemjson.options = [
            { val : 'value 1', content : 'item 1' },
            { val : 'value 2', content : 'item 2' }
        ];
        block = build('input', bemjson);
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
        block = build('input', bemjson);

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
        block = build('input', bemjson);
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
        block = build('input', bemjson);
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
        block = build('input', bemjson);
        var menu = block.findBlockInside('menu'),
            popup = block.findBlockInside('popup');

        block.setMod('focused');
        popup.getMod('visible').should.be.true;
        // click on item
        menu.findBlocksInside('menu-item')[1].domElem.click();

        popup.getMod('visible').should.equal('');
    });

    it('should render groups with `group` element in `menu`', function() {
        bemjson.options = [
            {
                title : 'Russia',
                group : [
                    { val : 'MSC', content : 'Moscow' },
                    { val : 'SPB', content : 'Saint-Petersburg' }
                ]
            },
            {
                group : [
                    { val : 'PAR', content : 'Paris' },
                    { val : 'MAR', content : 'Marseille' }
                ]
            },
            {
                title : 'Austria',
                group : []
            },
            { val : 'NYC', content : 'New York' }
        ];
        block = build('input', bemjson);
        var menu = block.findBlockInside('menu');

        expect(menu.elem('group')).to.not.be.null;
        menu.elem('group').length.should.equal(3);

        var items = menu.findBlocksInside('group', 'menu-item'),
            titles = menu.elem('group-title');

        titles.length.should.equal(2);
        $(titles[0]).html().should.equal('Russia');
        $(titles[1]).html().should.equal('Austria');

        items.length.should.equal(4);
        items[0].params.val.should.equal('MSC');
        items[0].domElem.text().should.equal('Moscow');
        items[3].params.val.should.equal('MAR');
        items[3].domElem.text().should.equal('Marseille');
    });

    it('should emit event `select` when item selected', function() {
        bemjson.options = [
            { val : 'value 1', data: 'xxx', content : 'item 1' },
            { val : 'value 2', data: 'yyy', content : 'item 2' }
        ];
        block = build('input', bemjson);
        block.setVal('value 0');
        var menu = block.findBlockInside('menu');
        var eventCatched = false;

        block.on('select', function(_, item) {
            item.val.should.equal('value 2');
            item.data.should.equal('yyy');
            eventCatched = true;
        });

        // click on item
        menu.findBlocksInside('menu-item')[1].domElem.click();

        eventCatched.should.be.true;

        block.getVal().should.equal('value 2');
    });

    it('should close the popup when user clicked outside', function() {
        block = build('input', bemjson);
        var popup = block.findBlockInside('popup');

        block.elem('control').focus();
        popup.getMod('visible').should.be.true;

        var x = popup.domElem.position().left - 1, y = popup.domElem.position().top - 1;
        $(document).trigger(new $.Event('pointerpress', { pageX: x, pageY: y }));
        block._isPointerPressInProgress.should.be.false;
        $(document).trigger(new $.Event('pointerrelease', { pageX: x, pageY: y }));

        popup.getMod('visible').should.equal('');
    });

    it('should not close the popup when user clicked inside', function() {
        block = build('input', bemjson);
        var popup = block.findBlockInside('popup');

        block.elem('control').focus();
        popup.getMod('visible').should.be.true;

        var x = popup.domElem.position().left + 1, y = popup.domElem.position().top + 1;
        popup.domElem.trigger(new $.Event('pointerpress', { pageX: x, pageY: y }));
        block._isPointerPressInProgress.should.be.true;
        block.elem('control').blur();
        popup.domElem.trigger(new $.Event('pointerrelease', { pageX: x, pageY: y }));

        popup.getMod('visible').should.be.true;
    });

    it('should support setting options on runtime', function() {
        block = build('input', bemjson);
        block.setOptions.should.be.a('function');

        block.setOptions([
            { val : 'value 1', content : 'item 1' },
            { val : 'value 2', content : 'item 2' }
        ]);

        var menu = block.findBlockInside('popup').findBlockInside('menu');
        var items = menu.findBlocksInside('menu-item');

        expect(items).to.not.be.null;
        items.length.should.equal(2);
        items[0].getVal().should.equal('value 1');
        items[0].domElem.text().should.equal('item 1');
        items[1].getVal().should.equal('value 2');
        items[1].domElem.text().should.equal('item 2');

        block.setOptions([]);

        menu = block.findBlockInside('popup').findBlockInside('menu');
        items = menu.findBlocksInside('menu-item');

        items.length.should.equal(0);
    });

    it('should support setting options with groups on runtime', function() {
        block = build('input', bemjson);
        block.setOptions.should.be.a('function');

        block.setOptions([
            {
                title : 'Russia',
                group : [
                    { val : 'MSC', content : 'Moscow' },
                    { val : 'SPB', content : 'Saint-Petersburg' }
                ]
            },
            {
                group : [
                    { val : 'PAR', content : 'Paris' },
                    { val : 'MAR', content : 'Marseille' }
                ]
            },
            {
                title : 'Austria',
                group : []
            },
            { val : 'NYC', content : 'New York' }
        ]);

        var menu = block.findBlockInside('menu');

        expect(menu.elem('group')).to.not.be.null;
        menu.elem('group').length.should.equal(3);

        var items = menu.findBlocksInside('group', 'menu-item'),
            titles = menu.elem('group-title');

        titles.length.should.equal(2);
        $(titles[0]).html().should.equal('Russia');
        $(titles[1]).html().should.equal('Austria');

        items.length.should.equal(4);
        items[0].params.val.should.equal('MSC');
        items[0].domElem.text().should.equal('Moscow');
        items[3].params.val.should.equal('MAR');
        items[3].domElem.text().should.equal('Marseille');
    });
});

provide();

});
