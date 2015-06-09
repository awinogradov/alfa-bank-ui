modules.define(
    'display-none',
    ['i-bem__dom', 'jquery'],
    function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {

                this.bindTo('switcher', 'click', function() {
                    this.toggleMod('true', true);
                });

            }
        },
        'true' : {
            'true' : function() {
                console.log('display:none');
            },
            '' : function() {
                console.log('display:block');
            }
        }
    }

}));

});

