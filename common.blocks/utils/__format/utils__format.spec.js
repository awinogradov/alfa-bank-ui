modules.define('spec', ['utils__format'], function(provide, utils) {

    describe('collapse', function() {

        it('should format empty sum', function() {
            utils.formatSum().should.equal(0);
        });

        it('should format ceil sum', function() {
            utils.formatSum(1).should.equal('1');
            utils.formatSum(123).should.equal('123');
            utils.formatSum(1234).should.equal('1 234');
            utils.formatSum(12345).should.equal('12 345');
        });

        it('should format float sum', function() {
            utils.formatSum(1.1).should.equal('1,10');
            utils.formatSum(1.15).should.equal('1,15');
            utils.formatSum(1234.1).should.equal('1 234,10');
            utils.formatSum(1234.15).should.equal('1 234,15');
            utils.formatSum(123456.15).should.equal('123 456,15');
        });

        it('should format formatted sum', function() {
            utils.formatSum('1000.4').should.equal('1 000,40');
            utils.formatSum('1 000.4').should.equal('1 000,40');
            utils.formatSum('10 00.4').should.equal('1 000,40');
            utils.formatSum('1000,4').should.equal('1 000,40');
            utils.formatSum('100 7,44').should.equal('1 007,44');
        });

    });

    provide();

});
