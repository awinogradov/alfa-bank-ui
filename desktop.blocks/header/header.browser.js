modules.define('header',
    ['i-bem__dom', 'jquery'],
    function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                var _this = this;

                this._colorize();

                window.onscroll = function() {
                    _this._colorize();
                };
            }
        }
    },
    _colorize : function() {
        $(window).scrollTop() > 10 ?
            this.setMod('fixed') :
            this.delMod('fixed');
    }

}));

});
