modules.define(
'form-test',
function(provide, FormTest) {

provide(FormTest.decl({
    onSetMod: {
        'js': {
            'inited': function() {
                console.log('message-text set');

                this.findBlockInside({ block: 'form', modName: 'message', modVal: 'text' })
                    .on('submit', function(e, data) {
                        var form = e.target;

                        form.validate();

                        if(form.getStatus()) {
                            form.setMessageVal('form valid! Data: ' + JSON.stringify(data));
                        } else {
                            form.setMessageVal('form invalid! Data: ' +  JSON.stringify(data));
                        }
                    });

            }
        }
    }
}));

});
