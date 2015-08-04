modules.define(
'form-test',
function(provide, FormTest) {

provide(FormTest.decl({
    onSetMod: {
        'js': {
            'inited': function() {
                this.findBlockInside('form')
                    .on('submit', function(e) {
                        var form = e.target;
                        form.validate();
                    });
            }
        }
    }
}));

});
