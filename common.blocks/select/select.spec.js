/* global modules:false */

/**
 * @spec select
 */

modules.define(
    'spec',
    ['select', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Select, BEMDOM, $, BEMHTML) {

describe('select', function() {
    var select,
        menu;

    beforeEach(function() {
        select = BEMDOM.init($(BEMHTML.apply({
                block: 'select',
                mods: { mode: 'custom' },
                name: 'select1',
                val: 1,
                options: [
                    { val: 1, text: 'first' },
                    { val: 2, text: 'second' }
                ]
            }))
            .appendTo('body'))
            .bem('select'),
        menu = select.findBlockInside('menu');
    });

    afterEach(function() {
        BEMDOM.destruct(select.domElem);
    });

    describe('render new options on setOptions call', function() {
        it('should be render new options by default', function() {
            select.setOptions([
                { val: 1, text: 'one' },
                { val: 2, text: 'two' }
            ]);
            $('.menu-item', menu.domElem).eq(0).text().should.be.equal('one');
        });

        it('should be render icon in options', function() {
            select.setOptions([
                {
                    val: 1,
                    text: 'Twitter',
                    checkedText: 'tw',
                    icon: { block: 'icon', content: 'twitter' }
                },
                {
                    val: 2,
                    text: 'VKontakte',
                    checkedText: 'vk',
                    icon: { block: 'icon', content: 'vk' }
                }
            ]);
            menu.findBlockInside('icon').domElem.text().should.be.equal('twitter');
        });

        it('should be render group in options', function() {
            select.setOptions([
                { val: 1, text: 'Доклад' },
                { val: 2, text: 'Мастер-класс', disabled: true },
                { val: 3, text: 'Круглый стол' },
                {
                    title: 'Group',
                    group: [
                        { val: 4, text: 'Доклад' },
                        { val: 5, text: 'Мастер-класс' },
                        { val: 6, text: 'Круглый стол' }
                    ]
                }
            ]);
            menu.elem('group-title').text().should.be.equal('Group');
        });
    });
});

provide();

});

