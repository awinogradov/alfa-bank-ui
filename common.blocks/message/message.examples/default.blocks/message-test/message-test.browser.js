/**
 * @module message-test
 */

modules.define(
    'message-test',
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
                this._input = this.findBlockInside('input', 'input');
                this._showButton = this.findBlockInside('show', 'button');
                this._hideButton = this.findBlockInside('hide', 'button');
                this._messageText = this.findBlockInside({ block: 'message', modName: 'type', modVal: 'text' });
                this._messagePopup = this.findBlockInside({ block: 'message', modName: 'type', modVal: 'popup' });
                this._messages = this.findBlocksInside('message');

                this._messagePopup.setAnchor(this._showButton);

                this._showButton.bindTo('click', function() {
                    this
                        ._updateMassageVal()
                        ._showMessage();
                }.bind(this));

                this._hideButton.bindTo('click', this._hideMessage.bind(this));
            }
        }
    },
    _updateMassageVal: function() {
        var val = this._input.getVal();
        this._messages.forEach(function(message) {
            message.setVal(val);
        });
        return this;
    },
    _showMessage: function() {
        this._messages.forEach(function(message) {
            message.show();
        });
        return this;
    },
    _hideMessage: function() {
        this._messages.forEach(function(message) {
            message.hide();
        });
        return this;
    }
}));

});
