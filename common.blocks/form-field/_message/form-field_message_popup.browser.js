modules.define('form-field', [], function(provide, FormField) {

    provide(FormField.decl({ modName : 'message', modValue : 'popup' }, {
        onSetMod : {
            'focused' : {
                'true' : function() {
                    this.__base.apply(this, arguments);
                    this.hasMod('invalid') && this._message.setMod('visible');
                },
                '' : function() {
                    this.__base.apply(this, arguments);
                    this._message.delMod('visible');
                }
            }
        }
    }));

});
