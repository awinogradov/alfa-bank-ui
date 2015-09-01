modules.define('spec',
    ['jquery', 'spec__utils', 'calendar', 'moment'],
    function(provide, $, helper, calendar, moment) {

var build = helper.buildBlock;

describe('calendar', function() {

    var block,
        bemjson;

    beforeEach(function() {
        bemjson = {
            block: 'calendar'
        };
    });

    afterEach(function() {
        helper.destruct(block);
    });

    it('should choose this month', function() {
        block = build('calendar', bemjson);
        var date = new Date();

        (moment(block._month).month()).should.be.equal(moment(date).month());
    });

    it('should be set val in template', function() {
        var checkDate = '12.08.2015';
        bemjson.val = checkDate;

        block = build('calendar', bemjson);

        (block.getFormatedDate() === checkDate).should.be.true;

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

    it('should be switch month arrow clicked', function(done) {
        block = build('calendar', bemjson);

        block.setVal('25.06.2015');
        setTimeout(function() {
            block.findElem('arrow', 'direction', 'right').click();
            (moment(block._month).month()).should.be.equal(6);
            block.findElem('arrow', 'direction', 'left').click();
            (moment(block._month).month()).should.be.equal(5);
            done();
        }, 200);
    });

    it('should not to switch month', function(done) {

        bemjson.js = {
            earlierLimit: '01.01.2015',
            laterLimit: '31.12.2015',
        };

        block = build('calendar', bemjson);

        block.setVal('02.02.2015');

        setTimeout(function() {
            block.findElem('arrow', 'direction', 'left').click();
            (block.hasMod(block.findElem('arrow', 'direction', 'left'), 'disabled')).should.be.true;
            block.findElem('arrow', 'direction', 'left').click();
            (moment(block._month).month()).should.be.equal(0);

            block.setVal('30.12.2015');

            setTimeout(function() {
                (block.hasMod(block.findElem('arrow', 'direction', 'right'), 'disabled')).should.be.true;
                block.findElem('arrow', 'direction', 'right').click();
                (moment(block._month).month()).should.be.equal(11);
                done();
            }, 100);
        }, 100);
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

        (block.hasMod(block.findElem('day').eq(10), 'type', 'off')).should.be.false;
        (block.hasMod(block.findElem('day').eq(11), 'type', 'off')).should.be.true;
        (block.hasMod(block.findElem('day').eq(12), 'type', 'weekend-off')).should.be.true;

    });

    it('_isValidDate should return null in check invalid Date', function() {
        block = build('calendar', bemjson);
        (block._isValidDate('trololo') === null).should.be.true;
    });
});

provide();

});
