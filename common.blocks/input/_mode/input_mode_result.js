/**
 * @module input
 */

modules.define('input', function(provide, Input) {

/**
 * @exports
 * @class input
 * @bem
 */
Input.decl({ modName : 'mode', modVal : 'result' }, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._val = this.elem('inner').text();
            }
        }
    },
    setVal : function(val) {
        this._val = val;
        this.elem('inner').text(val);
    },

    getVal : function() {
        return this._val;
    }
});

provide(Input);

});
