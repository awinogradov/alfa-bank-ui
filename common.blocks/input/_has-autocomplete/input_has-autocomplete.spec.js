var expect = chai.expect;

modules.define('spec',
    ['jquery', 'spec__utils', 'input'],
    function(provide, $, helper) {

var build = helper.buildBlock;

describe('input_has-autocomplete', function() {
    var block,
        bemjson = {
            block: 'input',
            mods: { 'has-autocomplete': true },
            options: []
        };

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
            { val: 'value 1', content: 'item 1' },
            { val: 'value 2', content: 'item 2' }
        ];
        block = build('input', bemjson);
        var menu = block.findBlockInside('popup').findBlockInside('menu'),
            items = menu.findBlocksInside('menu-item');

        expect(items).to.not.be.null;
        items.length.should.equal(2);
        items[0].getVal().should.equal('value 1');
        items[0].domElem.text().should.equal('item 1');
        items[1].getVal().should.equal('value 2');
        items[1].domElem.text().should.equal('item 2');
    });

    it('should add mod `opened` on focus', function() {
        bemjson.options = [
            { val: 'value 1', content: 'item 1' },
            { val: 'value 2', content: 'item 2' }
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
            { val: 'value 1', content: 'item 1' },
            { val: 'value 2', content: 'item 2' }
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
            { val: 'value 1', content: 'item 1' },
            { val: 'value 2', content: 'item 2' }
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
            { val: 'value 1', content: 'item 1' },
            { val: 'value 2', content: 'item 2' }
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
                title: 'Russia',
                group: [
                    { val: 'MSC', content: 'Moscow' },
                    { val: 'SPB', content: 'Saint-Petersburg' }
                ]
            },
            {
                group: [
                    { val: 'PAR', content: 'Paris' },
                    { val: 'MAR', content: 'Marseille' }
                ]
            },
            {
                title: 'Austria',
                group: []
            },
            { val: 'NYC', content: 'New York' }
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
            { val: 'value 1', data: 'xxx', content: 'item 1' },
            { val: 'value 2', data: 'yyy', content: 'item 2' }
        ];
        block = build('input', bemjson);
        block.setVal('value 0');
        var menu = block.findBlockInside('menu'),
            eventCatched = false;

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

    it('should not close the popup when user clicked on input (AFT-132)', function() {
        block = build('input', bemjson);
        var popup = block.findBlockInside('popup');

        block.elem('control').focus();
        block.getMod('opened').should.be.true;

        var x = block.domElem.position().left + 1, y = block.domElem.position().top + 1;
        block.domElem.trigger(new $.Event('pointerpress', { pageX: x, pageY: y }));
        block._isPointerPressInProgress.should.be.true;
        block.elem('control').blur();
        block.domElem.trigger(new $.Event('pointerrelease', { pageX: x, pageY: y }));

        block.getMod('opened').should.be.true;
    });

    it('should support setting options on runtime', function() {
        bemjson.mods.theme = 'XXX';
        bemjson.mods.bkg = 'YYY';
        bemjson.mods.size = 'ZZZ';
        block = build('input', bemjson);
        block.setOptions.should.be.a('function');

        block.setOptions([
            { val: 'value 1', content: 'item 1' },
            { val: 'value 2', content: 'item 2' }
        ]);

        var menu = block.findBlockInside('popup').findBlockInside('menu'),
            items = menu.findBlocksInside('menu-item');

        expect(items).to.not.be.null;
        items.length.should.equal(2);
        items[0].getVal().should.equal('value 1');
        items[0].domElem.text().should.equal('item 1');
        items[1].getVal().should.equal('value 2');
        items[1].domElem.text().should.equal('item 2');

        items[0].getMod('theme').should.equal('XXX');
        items[0].getMod('bkg').should.equal('YYY');
        items[0].getMod('size').should.equal('ZZZ');

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
                title: 'Russia',
                group: [
                    { val: 'MSC', content: 'Moscow' },
                    { val: 'SPB', content: 'Saint-Petersburg' }
                ]
            },
            {
                group: [
                    { val: 'PAR', content: 'Paris' },
                    { val: 'MAR', content: 'Marseille' }
                ]
            },
            {
                title: 'Austria',
                group: []
            },
            { val: 'NYC', content: 'New York' }
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

    describe('keyboard navigation', function() {
        it('should set focused item on up/down', function() {
            block = build('input', bemjson);
            block.setOptions([
                {
                    title: 'Russia',
                    group: [
                        { val: 'MSC', content: 'Moscow' },
                        { val: 'SPB', content: 'Saint-Petersburg' }
                    ]
                },
                {
                    group: [
                        { val: 'PAR', content: 'Paris' },
                        { val: 'MAR', content: 'Marseille' }
                    ]
                },
                {
                    title: 'Austria',
                    group: []
                },
                { val: 'NYC', content: 'New York' }
            ]);

            var menu = block.findBlockInside('menu'),
                menuItems = menu.findBlocksInside('menu-item');

            block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
            menuItems[0].hasMod('focused').should.be.true;

            block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
            menuItems[0].hasMod('focused').should.be.false;
            menuItems[1].hasMod('focused').should.be.true;

            block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
            block.domElem.trigger(new $.Event('keydown', { keyCode: 38 })); // UP
            block.domElem.trigger(new $.Event('keydown', { keyCode: 38 })); // UP
            menuItems[0].hasMod('focused').should.be.true;
            menuItems[1].hasMod('focused').should.be.false;

            // overflow test
            block.domElem.trigger(new $.Event('keydown', { keyCode: 38 })); // UP
            menuItems[0].hasMod('focused').should.be.true;
            menuItems[1].hasMod('focused').should.be.false;

            // overflow test 2
            for (var i = 0; i < 7; i++) {
                block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
            }
            menuItems[3].hasMod('focused').should.be.false;
            menuItems[4].hasMod('focused').should.be.true;
        });

        it('should skip hidden', function() {
            bemjson.options = [
                { val: 'value 1', data: 'xxx', content: 'item 1' },
                { val: 'value 2', data: 'xxx', content: 'item 2' },
                { val: 'value 3', data: 'xxx', content: 'item 3' },
                { val: 'value 4', data: 'yyy', content: 'item 4' },
                { val: 'value 5', data: 'yyy', content: 'item 5' }
            ];
            block = build('input', bemjson);

            var menu = block.findBlockInside('menu'),
                menuItems = menu.findBlocksInside('menu-item');

            menuItems[0].setMod('hidden');
            menuItems[2].setMod('hidden');
            menuItems[4].setMod('hidden');

            block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
            menuItems[0].hasMod('focused').should.be.false;
            menuItems[1].hasMod('focused').should.be.true;

            block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
            block.domElem.trigger(new $.Event('keydown', { keyCode: 38 })); // UP
            block.domElem.trigger(new $.Event('keydown', { keyCode: 38 })); // UP
            menuItems[0].hasMod('focused').should.be.false;
            menuItems[1].hasMod('focused').should.be.true;

            block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
            menuItems[2].hasMod('focused').should.be.false;
            menuItems[3].hasMod('focused').should.be.true;

            block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
            menuItems[3].hasMod('focused').should.be.true;
            menuItems[4].hasMod('focused').should.be.false;
        });

        it('should handle all hidden', function() {
            bemjson.options = [
                { val: 'value 1', data: 'xxx', content: 'item 1' },
                { val: 'value 2', data: 'xxx', content: 'item 2' }
            ];
            block = build('input', bemjson);

            var menu = block.findBlockInside('menu'),
                menuItems = menu.findBlocksInside('menu-item');

            menuItems[0].setMod('hidden');
            menuItems[1].setMod('hidden');

            block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
            menuItems[0].hasMod('focused').should.be.false;
            menuItems[1].hasMod('focused').should.be.false;
            block._focusedItem.should.equal(-1);
        });

        it('should select focused item on ENTER', function() {
            bemjson.options = [
                { val: 'value 1', data: 'xxx', content: 'item 1' },
                { val: 'value 2', data: 'xxx', content: 'item 2' }
            ];
            block = build('input', bemjson);

            var menu = block.findBlockInside('menu'),
                menuItems = menu.findBlocksInside('menu-item');

            block.domElem.trigger(new $.Event('keydown', { keyCode: 13 })); // ENTER

            block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
            block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
            block.domElem.trigger(new $.Event('keydown', { keyCode: 13 })); // ENTER

            block.getVal().should.equal('value 2');

            (typeof block._focusedItem).should.equal('undefined');
            (typeof block._menuItems).should.equal('undefined');
        });

        it('should reset on setOptions', function() {
            bemjson.options = [
                { val: 'value 1', data: 'xxx', content: 'item 1' },
                { val: 'value 2', data: 'xxx', content: 'item 2' }
            ];
            block = build('input', bemjson);

            var menu = block.findBlockInside('menu'),
                menuItems = menu.findBlocksInside('menu-item');

            block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
            block._focusedItem.should.equal(0);

            block.setOptions([]);

            (typeof block._focusedItem).should.equal('undefined');
            (typeof block._menuItems).should.equal('undefined');

            menuItems[0].hasMod('focused').should.be.false;
        });

        it('should reset on select', function() {
            bemjson.options = [
                { val: 'value 1', data: 'xxx', content: 'item 1' },
                { val: 'value 2', data: 'xxx', content: 'item 2' }
            ];
            block = build('input', bemjson);

            var menu = block.findBlockInside('menu'),
                menuItems = menu.findBlocksInside('menu-item');

            block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
            block._focusedItem.should.equal(0);

            menuItems[1].domElem.click();

            (typeof block._focusedItem).should.equal('undefined');
            (typeof block._menuItems).should.equal('undefined');
        });

        it('should not throw on empty list', function() {
            block = build('input', bemjson);
            block.domElem.trigger(new $.Event('keydown', { keyCode: 38 })); // UP
            block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
        });
    });
});

provide();

});
