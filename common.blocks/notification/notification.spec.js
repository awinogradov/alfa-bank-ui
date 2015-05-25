modules.define('spec', ['notification', 'spec__utils'], function(provide, _, utils) {

    describe('notification', function() {
        var notification;

        beforeEach(function() {
            notification = utils.buildBlock('notification', {
                block: 'notification',
                mods: { theme: 'alfa', bkg: 'color' }
            });
        });

        afterEach(function() {
            utils.destruct(notification);
        });

        it('should push work', function() {
            notification.push('ok', 'test push');
            notification.hasMod('visible').should.be.true;

            notification.findBlockInside('notification__inner').domElem.html().should.equals('test push');
            notification.findBlockInside('icon').getMod('action').should.equal('ok');
        });

        it('should work evade', function() {
            notification.push('ok', 'test push');
            notification._setVisible(false);
            notification.hasMod('visible').should.be.false;
            notification._setVisible(true);
            notification.hasMod('visible').should.be.true;
        });

        it('should work close notification', function() {
            notification.push('ok', 'test push');
            notification.findBlockInside('plate').elem('clear').click();
            notification.hasMod('visible').should.be.false;
        });

        it('should work stop evade on mouseenter', function() {
            var stopEvade = false;
            notification.push('ok', 'test push');

            notification._stopEvade = function() {
                stopEvade = true;
            };

            stopEvade.should.be.false;

            notification.findBlockInside('plate').domElem.mouseenter();

            stopEvade.should.be.true;
            notification.hasMod('visible').should.be.true;
        });

        it('should continue evade on mouseleave', function() {
            var stopEvade = false,
                startEvade = false;
            notification.push('ok', 'test push');

            notification._stopEvade = function() {
                stopEvade = true;
            };
            notification._startEvade = function() {
                startEvade = true;
            };

            stopEvade.should.be.false;
            startEvade.should.be.false;

            notification.findBlockInside('plate').domElem.mouseenter();

            stopEvade.should.be.true;
            startEvade.should.be.false;

            notification.findBlockInside('plate').domElem.mouseleave();

            startEvade.should.be.true;
        });

        it('should update message on next push', function() {
            notification.push('ok', 'test push');
            notification.findBlockInside('notification__inner').domElem.html().should.equals('test push');

            notification.push('ok', 'second test push');
            notification.findBlockInside('notification__inner').domElem.html().should.equals('second test push');
        });
    });

    provide();

});
