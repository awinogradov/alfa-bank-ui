modules.define(
'form-test',
function(provide, FormTest) {

provide(FormTest.decl({
    onSetMod: {
        'js': {
            'inited': function() {
                console.log('message-popup set');


                this.findBlockInside({ block: 'form', modName: 'message', modVal: 'popup' })
                    .on('submit', function(e, data) {
                        var form = e.target;

                        form.validate();

                        if(form.getStatus()) {
                            form.setMessageVal('form valid! Data: ' + JSON.stringify(data));
                            form.getMessage().show(); // Показываем попап
                        } else {
                            form.setMessageVal('form invalid! Data: ' +  JSON.stringify(data));
                            form.getMessage().show(); // Показываем попап
                        }
                    });

            }
        }
    }
}));

});
