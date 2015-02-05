modules.define('message', ['i-bem__dom'], function(provide, Message) {

    provide(Message.decl({ block : this.name, modName : 'type', modVal : 'popup' }, {

        onSetMod : {
            'error' : function(modName, modVal) {
                this._popup.setMod('error', modVal);
            },
            'visible' : function(modName, modVal) {
                this._popup.setMod('visible', modVal);
            }
        }

    }));
});
