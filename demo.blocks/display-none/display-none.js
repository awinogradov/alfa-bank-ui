modules.define(
    'display-none',
    ['i-bem__dom', 'jquery'],
    function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.block, /** @lends button.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                console.log('obj');
            }
        }
    }
}));

});
