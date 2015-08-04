/* istanbul ignore next text */
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
        this._isColorise = BEMDOM.win.scrollTop() > 10;
        this._isColorise ?
            this.setMod('fixed') :
            this.delMod('fixed');
    }

}));

});
