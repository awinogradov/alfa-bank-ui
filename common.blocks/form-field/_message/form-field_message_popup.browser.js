modules.define('form-field', [], function(provide, FormField) {

    provide(FormField.decl({ modName : 'message', modValue : 'popup' }, {
        onSetMod : {
            focused : {
                'true' : function() {
                    var msg, popup;
                    if (this.getMod('invalid') && (msg = this._getMessage()) && (popup = msg._popup)) {
                        popup.setMod('visible', true);
                    }
                },
                '' : function() {
                    var msg, popup;
                    if ((msg = this._getMessage()) && (popup = msg._popup)) {
                        popup.setMod('visible', false);
                    }
                }
            }
        }
    }));

});
