modules.define('header',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {

    onSetMod: {
        'js': {
            'inited': function() {
                this._colorize();
                this.bindToWin('scroll', function() {
                    this._colorize();
                });
            }
        }
    },

    _colorize: function() {
        BEMDOM.win.scrollTop() > 10 ?
            this.setMod('fixed') :
            this.delMod('fixed');
    }

}));

});
