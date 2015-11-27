var expect = chai.expect;

modules.define('spec',
    ['jquery', 'spec__utils', 'input', 'popup', 'calendar', 'moment'],
    function(provide, $, helper, input, popup, calendar, moment) {

var build = helper.buildBlock;

describe('input_has-calendar', function() {

    var block,
        bemjson;

    beforeEach(function() {
        bemjson = {
            block: 'input',
            mods: { 'has-calendar': true }
        };
    });

    afterEach(function() {
        helper.destruct(block);
    });

    it('should add `calendar` block after init', function() {
        block = build('input', bemjson);
        block.elem('control').trigger('focus');
        expect(block._calendar).to.not.be.null;
    });

    it('should pass `theme` mods to `calendar` end `popup`', function(done) {
        bemjson.mods.theme = 'xxx';
        block = build('input', bemjson);
        block.elem('control').trigger('focus');
        setTimeout(function() {
            block._calendar.getMod('theme').should.equal('xxx');
            block._popup.getMod('theme').should.equal('xxx');
            done();
        }, 200);
    });

    it('should set popup`s anchor', function(done) {
        block = build('input', bemjson);
        block.elem('control').trigger('focus');
        setTimeout(function() {
            block._popup._anchor.should.equal(block.domElem);
            done();
        }, 200);
    });

    it('should show calendar', function(done) {
        block = build('input', bemjson);
        block.elem('control').trigger('focus');
        setTimeout(function() {
            block.isShownCalendar().should.be.true;
            done();
        }, 200);
    });

    it('should get `Date`', function(done) {
        block = build('input', bemjson);
        var calendar = block._calendar;

        block.elem('control').trigger('focus');
        setTimeout(function() {
            calendar.findElem('day').eq(10).click();
            (moment.isDate(calendar.getVal())).should.be.true;
            (moment.isDate(block.getDate())).should.be.true;
            done();
        }, 200);
    });

    it('should toggle calendar when clicked switcher element', function(done) {
        bemjson.icon = { block: 'icon' };
        block = build('input', bemjson);
        block.findElem('icon').click();
        setTimeout(function() {
            block.isShownCalendar().should.be.true;
            block.findElem('icon').click();
            block.isShownCalendar().should.be.false;
            done();
        }, 200);
    });

    it('should not open calendar when input disabled', function(done) {
        bemjson.mods.disabled = true;
        block = build('input', bemjson);
        block.domElem.click();
        block.hasMod('js', 'inited').should.be.true;
        setTimeout(function() {
            block.isShownCalendar().should.be.false;
            done();
        }, 200);
    });

    it('should emit event `change` on calendar when day selected', function(done) {
        var eventCatched = false;

        block = build('input', bemjson);
        block.setVal('');
        block.elem('control').trigger('focus');

        setTimeout(function() {
            var calendar = block._calendar;

            calendar.on('change', function() {
                eventCatched = true;
            });

            // click on item
            calendar.findElem('day').eq(10).click();

            eventCatched.should.be.true;
            done();
        }, 200);
    });

    it('should not visible the popup when user set blur on input', function(done) {
        block = build('input', bemjson);

        block.elem('control').focus();
        setTimeout(function() {
            block.isShownCalendar().should.be.true;
            block.elem('control').blur();
            block.isShownCalendar().should.be.false;
            done();
        }, 200);
    });

    it('should visible the popup when user pointerdown event on input or calendar', function(done) {
        block = build('input', bemjson);

        block.elem('control').focus();
        setTimeout(function() {
            block.isShownCalendar().should.be.true;
            block._calendar.domElem.trigger(new $.Event('pointerdown'));
            block.isShownCalendar().should.be.true;
            block._ignoreBlur.should.be.true;
            block.elem('control').blur();
            block._ignoreBlur.should.be.false;
            done();
        }, 200);
    });

    it('should hide popup when user pointerdown event outside', function(done) {
        block = build('input', bemjson);
        block.elem('control').focus();
        setTimeout(function() {
            block.isShownCalendar().should.be.true;
            $('body').trigger(new $.Event('pointerdown'));
            block.isShownCalendar().should.be.false;
            done();
        }, 200);
    });

    it('should close the popup when user clicked outside', function(done) {
        block = build('input', bemjson);

        block.elem('control').focus();
        setTimeout(function() {
            block.isShownCalendar().should.be.true;
            block.elem('control').blur();

            var x = block._popup.domElem.position().left - 10,
                y = block._popup.domElem.position().top - 10;

            $('body').trigger(new $.Event('pointerpress', { pageX: x, pageY: y }));
            $('body').trigger(new $.Event('pointerrelease', { pageX: x, pageY: y }));
            block.isShownCalendar().should.be.false;
            done();
        }, 200);
    });

    it('should not close the popup when user clicked inside', function(done) {
        block = build('input', bemjson);

        block.elem('control').focus();
        setTimeout(function() {
            block.isShownCalendar().should.be.true;

            var popup = block._popup,
                x = popup.domElem.position().left + 10,
                y = popup.domElem.position().top + 10;

            popup.domElem.trigger(new $.Event('pointerpress', { pageX: x, pageY: y }));
            popup.domElem.trigger(new $.Event('pointerrelease', { pageX: x, pageY: y }));

            block.isShownCalendar().should.be.true;
            done();
        }, 200);
    });

    it('should not close the popup when user clicked on input', function(done) {
        block = build('input', bemjson);
        block.elem('control').focus();
        setTimeout(function() {
            block.isShownCalendar().should.be.true;

            var x = block.domElem.position().left + 1,
                y = block.domElem.position().top + 1;

            block.domElem.trigger(new $.Event('pointerpress', { pageX: x, pageY: y }));
            block.domElem.trigger(new $.Event('pointerrelease', { pageX: x, pageY: y }));

            block.isShownCalendar().should.be.true;
            done();
        }, 200);
    });

    it('should emit `pick-date` event on calendar changed', function() {
        block = build('input', bemjson);

        var shouldBeCalled = false;

        block.on('pick-date', function() {
            shouldBeCalled = true;
        });

        block._calendar.emit('change', { formated: 'hi there' });

        shouldBeCalled.should.be.true;
    });

    it('should be set readable format date', function(done) {
        bemjson.mods['readable-date'] = true;
        block = build('input', bemjson);

        var formatedDate = '24.06.2015';
        var readableDate = '24 июня 2015';

        block.hasMod('readable-date').should.be.true;

        block.elem('control').trigger('focus');
        block.setVal(formatedDate);

        setTimeout(function() {
            block.getVal().should.be.equal(formatedDate);

            block.elem('control').trigger('blur');
            block.getVal().should.be.equal(readableDate);
            done();
        }, 200);

    });

    it('should be set date when pressed ENTER', function(done) {
        block = build('input', bemjson);

        block.elem('control').trigger('focus');
        block.setVal('24.06.2015');
        setTimeout(function() {
            block.domElem.trigger(new $.Event('keydown', { keyCode: 13 })); // ENTER
            (block._calendar.getVal().toString() === block.getDate().toString()).should.be.true;

            block.domElem.trigger(new $.Event('keydown', { keyCode: 40 })); // DOWN
            done();
        }, 200);

    });

    it('getCalendar', function(done) {
        block = build('input', bemjson);
        block.elem('control').trigger('focus');
        setTimeout(function() {
            (block.getCalendar().domElem.hasClass('calendar')).should.be.true;
            done();
        }, 200);
    });

});

provide();

});
