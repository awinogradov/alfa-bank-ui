modules.define('message', ['i-bem__dom'], function(provide, Message) {

    provide(Message.decl({ block: this.name, modName: 'type', modVal: 'popup' }, {

        onSetMod: {
            'invalid': function(modName, modVal) {
                this._popup.setMod('invalid', modVal);
            }
        }

    }));
});
