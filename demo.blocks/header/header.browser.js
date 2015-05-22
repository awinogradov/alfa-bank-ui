modules.define(
    'header',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

        provide(BEMDOM.decl(this.name, {

            onSetMod: {
                'js': {
                    'inited': function() {
                        var _this = this;

                        this._colorize();

                        window.onscroll = function() {
                            _this._colorize();
                        };
                    }
                }
            },
            _colorize: function() {
                window.scrollY > 10 ?
                    this.setMod('fixed') :
                    this.delMod('fixed');
            }
        }));
    }
);
