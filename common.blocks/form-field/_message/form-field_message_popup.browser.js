modules.define('form-field', [], function(provide, FormField) {

    provide(FormField.decl({ modName : 'message', modValue : 'popup' }, {
        onSetMod : {
            'focused' : function(modName, modVal) {
                var msg = this._getMessage();
                msg && msg.setMod('visible', modVal && this.getMod('invalid'));
            }
        }
    }));

});
