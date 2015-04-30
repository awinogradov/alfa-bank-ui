modules.define('input',
    ['jquery__numeric'],
    function(provide, $, Input) {

provide(Input.decl({ modName : 'type', modVal : 'money' }, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                var _this = this;

                $(this.elem('control')).keyup(function(q){
                    if(q.keyCode == 190){
                        _this.setVal(_this._val + ',');
                    }
                });

                $(this.elem('control')).numeric({
                    negative : false,
                    precision : _this.params.precision,
                    scale : _this.params.scale,
                    decimal : ','
                });
            }
        },
        'focused' : {
            'true' : function() {
                $(this.elem('control')).select();
            }
        }
    },

    /**
     * Returns control value
     * @returns {String}
     * @override
     */
    getVal : function() {
        var base = this.__base.apply(this, arguments);
        return typeof base === 'string' && base.replace(',', '.');
    }

}));

});
