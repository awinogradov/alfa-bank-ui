modules.define('form-field', [], function(provide, FormField) {

    provide(FormField.decl({ modName : 'message', modValue : 'popup' }, {
        onSetMod : {
            'focused' : {
                'true' : function() {
                    this.hasMod('invalid') && this._message.setMod('visible');
                },
                '' : function() {
                    this._message.delMod('visible');
                }
            }
        }
    }));

});
