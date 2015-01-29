/**
 * @module input
 */

modules.define('input',
    [ 'keyboard__codes'],
    function(provide, keyCodes, Input) {
    /**
     * @exports
     * @class input
     * @bem
     */
    provide(Input.decl({ modName : 'type', modVal : 'inplace' }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    var _this = this;

                    this._link = this.findBlockOn('trigger', 'link');

                    this._link.bindTo('click', function(){
                        _this._onLinkClick();
                    });

                    this.on('change', _this._onValueUpdate);

                    this.bindTo('keyup', _this._onEnter);

                    this.bindTo('blur', this._onBlur);
                }
            }
        },

        _onLinkClick : function() {
            this.setMod('focused');
            var _input = this.findBlockInside('input__control').domElem[0];
            _input.setSelectionRange(_input.value.length, _input.value.length);
        },

        _onValueUpdate : function() {
            this._link._val = this.getVal();
            //this._link.setVal(this.getVal());
        },

        _onEnter : function(e) {
            if(e.keyCode === keyCodes.ENTER){
                this.setMod('focused', false);
            }
        },
        _onBlur : function() {
            this.__base.apply(this, arguments);
            this._link.setVal(this.getVal());
        }
    }));

});
