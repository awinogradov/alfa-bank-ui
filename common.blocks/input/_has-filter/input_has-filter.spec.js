modules.define('spec', ['spec__utils', 'jquery', 'input'], function(provide, utils, $) {

    describe('input_has-filter', function() {

        var bemjson = {
            block : 'input',
            mods : {
                'has-autocomplete' : true,
                'has-filter' : true
            },
            options : [
                { val : '111', data : { text : 'AAA' }, content : 'XXX' },
                { val : '222', data : { text : 'BBB' }, content : 'YYY' }
            ]
        }

        var block, items;

        beforeEach(function() {
            block = utils.buildBlock('input', bemjson);
            items = block.getMenu().findBlocksInside('menu-item');
        });

        afterEach(function() {
            utils.destruct(block);
        });

        it('should call default filter function on change', function() {
            block.setVal('X');
            items[0].hasMod('hidden').should.be.false;
            items[1].hasMod('hidden').should.be.true;

            block.setVal('');
            items[0].hasMod('hidden').should.be.false;
            items[1].hasMod('hidden').should.be.false;
        });

        it('should use custom filter function', function() {
            block.setFilter(function(item, val) {
                return item.params.data.text.match(val);
            });

            block.setVal('B');
            items[0].hasMod('hidden').should.be.true;
            items[1].hasMod('hidden').should.be.false;

            block.setVal('');
            items[0].hasMod('hidden').should.be.false;
            items[1].hasMod('hidden').should.be.false;
        });

        it('should not call filter function on same value', function() {
            var called = false;
            block.setFilter(function(item, val) {
                called = true;
                return true;
            });
            block.setVal('A');

            called.should.be.true;

            called = false;
            block.setVal('A');

            called.should.be.false;

            // manually trigger filter
            block.filter();
            called.should.be.true;
        });

        it('should not throw without has-autocomplete', function() {
            var block = utils.buildBlock('input', {
                block : 'input',
                mods : {
                    'has-filter' : true
                }
            });

            utils.destruct(block);
        });

        it('should reset focused item if it was filtered out', function() {
            block.elem('control').trigger(new $.Event('keydown', { keyCode : 40 })); // DOWN
            items[0].hasMod('focused').should.be.true;

            block.setVal('X');
            items[0].hasMod('hidden').should.be.false;
            items[0].hasMod('focused').should.be.true;

            block.setVal('Y');
            items[0].hasMod('hidden').should.be.true;
            items[0].hasMod('focused').should.be.false;
        });

    });

    provide();
});
