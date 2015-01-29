/**
 * @module input
 */

modules.define('input',
    function(provide, keyCodes, Input) {

/**
 * @exports
 * @class input
 * @bem
 */
Input.decl({ modName : 'type', modVal : 'inplace' }, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                var _this = this;

                this._trigger = this.findBlockOn('trigger', 'link');
                this._trigger.bindTo('click', function() {
                    _this._onTriggerClick();
                });

                this.on('change', _this._onValueUpdate);
                this.bindTo('keyup', _this._onEnter);
                this.bindTo('blur', _this._onBlur);
            }
        }
    },

    _onTriggerClick : function() {
        this.setMod('focused');

        this.elem('control').val(this.getVal());
    },

    _onValueUpdate : function() {
        this._trigger._val = this.getVal();
    },

    _onEnter : function(e) {
        if(e.keyCode === keyCodes.ENTER){
            this.setMod('focused', false);
        }
    },
    _onBlur : function() {
        this.__base.apply(this, arguments);

        this._trigger.setVal(this.getVal());
    }
});

provide(Input);

});
