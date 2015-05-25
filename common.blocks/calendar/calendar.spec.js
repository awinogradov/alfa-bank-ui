var expect = chai.expect;

modules.define('spec',
    ['jquery', 'spec__utils', 'popup', 'calendar'],
    function(provide, $, helper, popup, calendar) {

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
        block.setVal(date);
        block.getVal(date).should.equal(date);
    });

    it('should show/hide `popup`', function() {
        block = build('calendar', bemjson);
        block.setAnchor($('body'));
        block.show();
        block._popup.hasMod('visible').should.be.true;
        block.hide();
        block._popup.hasMod('visible').should.be.false;
    });

});

provide();

});
