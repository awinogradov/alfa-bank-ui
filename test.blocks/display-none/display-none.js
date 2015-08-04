modules.define(
    'display-none',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {

                this.bindTo('switcher', 'click', function() {
                    this.toggleMod('true', true);
                });

            }
        }
    }

}));

});

