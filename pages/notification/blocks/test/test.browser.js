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
                this._defaultButton = this.findBlockInside('default', 'button');
                this._okButton = this.findBlockInside('ok', 'button');
                this._errorButton = this.findBlockInside('error', 'button');
                this._themeButton = this.findBlockInside('theme', 'button');
                this._notification = this.findBlockInside('notification');
                this._page = this.findBlockOutside('page');
                this._input = this.findBlockInside('input', 'input');

                ['ok', 'error'].forEach(function(status) {
                    this['_' + status + 'Button'].bindTo('click', function() {

                        this._pushMessage(this._input.getVal(), status);

                    }.bind(this));
                }, this);

                this._defaultButton.bindTo('click', function() {
                    this._pushMessage(this._input.getVal(), status);
                }.bind(this));

                this._themeButton.bindTo('click', function() {
                    [
                        this._notification,
                        this._page,
                        this._defaultButton,
                        this._okButton,
                        this._errorButton,
                        this._themeButton,
                        this._input
                    ].forEach(function(block) {
                        block.toggleMod('theme', 'alfa-on-color', 'alfa-on-white');
                    }, this);
                }.bind(this));
            }
        }
    },
    _pushMessage: function(message, status) {
        this._notification.setMod('status', status);
        this._notification.push(status, message);
    }
}));

});
