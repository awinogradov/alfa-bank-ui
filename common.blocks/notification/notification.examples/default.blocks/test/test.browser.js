/**
 * @module message-test
 */

modules.define(
    'test',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

/**
 * @exports
 * @class message-test
 * @bem
 */
provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                this._okButton = this.findBlockInside('ok', 'button');
                this._failButton = this.findBlockInside('fail', 'button');

                ['ok', 'fail'].forEach(function(status) {
                    this['_' + status + 'Button'].bindTo('click', function() {

                        var message = this.findBlockInside('input', 'input').getVal();
                        this.findBlockInside('notification')
                            .push(status, message);

                    }.bind(this));
                }, this);
            }
        }
    }
}));

});
