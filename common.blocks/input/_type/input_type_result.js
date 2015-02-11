/**
 * @module input
 */

modules.define('input', function(provide, Input) {

    /**
     * @exports
     * @class input
     * @bem
     */
    Input.decl({ modName : 'type', modVal : 'result' }, {

        onSetMod : {
            'js' : {
                'inited' : function() {
                    this._val = this.elem('result').text();
                }
            }
        },
        setVal : function(val) {
            this._val = val;
            this.elem('result').text(val);
        },

        getVal : function() {
            return this._val;
        }
    });

    provide(Input);

});
