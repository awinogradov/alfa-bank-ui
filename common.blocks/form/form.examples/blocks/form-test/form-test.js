modules.define(
'form-test',
['i-bem__dom'],
function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.findBlockInside('form')
                    .on('submit', function(e, data) {
                        if(e.target.getStatus()) {
                            console.log('form valid', data);
                        } else {
                            console.log('form invalid', data);
                        }
                    });
            }
        }
    }
}));

});
