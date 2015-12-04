modules.define('spec', ['spec__utils'/*, 'sinon'*/, 'notification', 'popup'], function(provide, utils/*, sinon*/) {

    describe('notification', function() {
        var notification;

        beforeEach(function() {
            notification = utils.buildBlock('notification', {
                block: 'notification',
                mods: { theme: 'alfa-on-color' }
            });
        });

        afterEach(function() {
            utils.destruct(notification);
        });

        it('should push work', function() {
            notification.push('ok', 'test push');
            notification.hasMod('visible').should.be.true;

            notification.elem('message').text().should.equals('test push');
            notification.findBlockInside('icon', 'icon').getMod('action').should.equal('ok');
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
            notification.elem('close').click();
            notification.hasMod('visible').should.be.false;
        });

        it('should set theme mods to popup and close-icon if notification theme changed', function() {
            notification.setMod('theme', 'test');
            notification.findBlockOn('popup').getMod('theme').should.be.equal('test');
            notification.findBlockInside('close', 'icon').getMod('theme').should.be.equal('test');
        });

        // TODO: WTF??? Don't work mouseenter/mouseleave events in tests!!!
        // it('should work stop evade on mouseenter', function() {
        //     var spy = sinon.spy();
        //     notification._stopEvade = spy;
        //     notification.domElem.mouseenter();
        //     spy.should.have.been.calledOnce;
        // });

        // it('should continue evade on mouseleave', function() {
        //     var stopEvade = sinon.spy();
        //     var startEvade = sinon.spy();
        //     notification._stopEvade = stopEvade;
        //     notification._stopEvade = startEvade;
        //     notification.domElem.mouseleave();
        //     stopEvade.should.have.been.calledOnce;
        //     startEvade.should.have.been.calledOnce;
        // });

        it('should update message on next push', function() {
            notification.push('ok', 'test push');
            notification.elem('message').text().should.equals('test push');

            notification.push('ok', 'second test push');
            notification.elem('message').text().should.equals('second test push');
        });
    });

    provide();

});
