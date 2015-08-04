modules.define('spec',
    ['jquery', 'spec__utils', 'popup', 'calendar', 'moment'],
    function(provide, $, helper, popup, calendar, moment) {

var build = helper.buildBlock;

describe('calendar', function() {

    var block,
        bemjson,
        expect = chai.expect;

    beforeEach(function() {
        bemjson = {
            block: 'calendar'
        };
    });

    afterEach(function() {
        helper.destruct(block);
    });

    it('should have `popup`', function() {
        block = build('calendar', bemjson);
        expect(block._popup).to.not.be.null;
    });

    it('should have `control` and `box` elements', function() {
        block = build('calendar', bemjson);
        expect(block.elem('box')).to.not.be.null;
        expect(block.elem('control')).to.not.be.null;
    });

    it('should setVal/getVal equal', function() {
        block = build('calendar', bemjson);
        var date = new Date('Wed May 20 2015 00:00:00 GMT+0300 (MSK)');

        block.setVal('');
        (block._val === null).should.be.true;
        (block.getVal()).should.equal('');

        block.setVal(date);
        (block.getVal().toString()).should.equal(date.toString());
    });

    it('should show/hide `popup`', function() {
        block = build('calendar', bemjson);
        block.setAnchor($('body'));
        block.show();
        block._popup.hasMod('visible').should.be.true;
        block.hide();
        block._popup.hasMod('visible').should.be.false;
    });

    it('should be get formated date', function() {
        block = build('calendar', bemjson);
        var date = '24.06.2015';
        block.getFormatedDate().should.be.equal('');
        block.setVal(date);
        block.getFormatedDate().should.be.equal(date);
    });

    it('should be get readable date', function() {
        block = build('calendar', bemjson);
        block.getReadableDate().should.be.equal('');
        block.setVal('24.06.2015');
        block.getReadableDate().should.be.equal('24 июня 2015');
    });

    it('should be switch month `switchMonth function`', function() {
        block = build('calendar', bemjson);

        block.setVal('25.06.2015');
        block.switchMonth(1);
        (moment(block._month).month()).should.be.equal(6);
        block.switchMonth(-1);
        (moment(block._month).month()).should.be.equal(5);

    });

    it('should be switch month arrow clicked', function() {
        block = build('calendar', bemjson);

        // Arrows clicked
        block.setVal('25.06.2015');
        block._build();
        block.findElem('arrow', 'direction', 'right').trigger(new $.Event('pointerclick'));
        (moment(block._month).month()).should.be.equal(6);
        block.findElem('arrow', 'direction', 'left').trigger(new $.Event('pointerclick'));
        (moment(block._month).month()).should.be.equal(5);
    });

    it('should not to switch month', function() {

        bemjson.js = {
            earlierLimit: '01.01.2015',
            laterLimit: '31.12.2015',
        };

        block = build('calendar', bemjson);

        block.setVal('02.02.2015');
        block._build();
        block.findElem('arrow', 'direction', 'left').trigger(new $.Event('pointerclick'));
        (block.hasMod(block.findElem('arrow', 'direction', 'left'), 'disabled')).should.be.true;
        block.findElem('arrow', 'direction', 'left').trigger(new $.Event('pointerclick'));
        (moment(block._month).month()).should.be.equal(0);

        block.setVal('30.12.2015');
        block._build();
        (block.hasMod(block.findElem('arrow', 'direction', 'right'), 'disabled')).should.be.true;
        block.findElem('arrow', 'direction', 'right').trigger(new $.Event('pointerclick'));
        (moment(block._month).month()).should.be.equal(11);
    });

    it('should be set directions', function() {
        block = build('calendar', bemjson);
        var directions = ['right-center'];
        block.setDirections(directions);
        (block._popup.params.directions).should.be.equal(directions);
    });

    it('should be set offDays', function() {
        block = build('calendar', bemjson);
        var days = ['25.06.2015', '26.06.2015'];
        block.setOffDays(days);
        (block.params.offDays).should.be.equal(days);
    });

    it('should be check offDays', function() {
        block = build('calendar', bemjson);
        block.setOffDays(['25.06.2015', '26.06.2015']);

        block._isOffDay('24.06.2015').should.be.false;
        block._isOffDay('25.06.2015').should.be.true;
        block._isOffDay('26.06.2015').should.be.true;
        block._isOffDay('27.06.2015').should.be.false;

    });

    it('should be formated date', function() {
        block = build('calendar', bemjson);

        block._formatDate(new Date('2015-06-25T00:00:00+03:00')).should.be.equal('25.06.2015');
        block._formatDate('2015-06-25T00:00:00+03:00').should.be.equal('25.06.2015');

        block._formatDate(null).should.be.equal('');
        block._formatDate('ololo').should.be.equal('');

    });

    it('should be set limits days', function() {
        block = build('calendar', bemjson);

        block.setLimits(null, '15.02.1111');
        (moment(block._month).get('month')).should.be.equal(1);
        (moment(block._month).get('year')).should.be.equal(1111);

        block.setLimits('15.02.3333', null);
        (moment(block._month).get('month')).should.be.equal(1);
        (moment(block._month).get('year')).should.be.equal(3333);
    });

    it('should be set type `off` day/weekend', function() {
        block = build('calendar', bemjson);

        block.setVal('10.06.2015');
        block.setOffDays([
            '11.06.2015', /*ПТ*/
            '12.06.2015'  /*СБ*/
        ]);
        block._build();

        (block.hasMod(block.findElem('day').eq(10), 'type', 'off')).should.be.false;
        (block.hasMod(block.findElem('day').eq(11), 'type', 'off')).should.be.true;
        (block.hasMod(block.findElem('day').eq(12), 'type', 'weekend-off')).should.be.true;

    });
});

provide();

});
