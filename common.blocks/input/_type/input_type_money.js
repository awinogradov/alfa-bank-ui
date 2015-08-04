modules.define('input',
    ['jquery__numeric', 'utils__format'],
    function(provide, $, formatUtils, Input) {

provide(Input.decl({ modName: 'type', modVal: 'money' }, {

    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                var _this = this;

                $(this.elem('control')).keyup(function(q) {
                    if (q.keyCode === 190){
                        _this.setVal(_this._val + ',');
                    }
                });

                $(this.elem('control')).numeric({
                    negative: false,
                    precision: _this.params.precision,
                    scale: _this.params.scale,
                    decimal: ','
                });

                this.setVal(formatUtils.formatSum(this._val));
            }
        },
        'focused': {
            'true': function() {
                this.setVal(this._val.replace(' ', ''));
                $(this.elem('control')).select();

            },
            '': function() {
                this.setVal(formatUtils.formatSum(this._val));
            }
        }
    },

    /**
     * Returns control value
     * @returns {String}
     * @override
     */
    getVal: function() {
        var base = this.__base.apply(this, arguments);
        return typeof base === 'string' && base.replace(',', '.').replace(' ', '');
    }

}));

});
