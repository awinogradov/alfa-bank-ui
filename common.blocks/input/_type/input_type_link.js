/**
 * @module input
 */

modules.define('input',
    ['keyboard__codes'],
    function(provide, keyCodes, Input) {

    /**
     * @exports
     * @class input
     * @bem
     */
    Input.decl({ block : this.name, modName : 'type', modVal : 'link' }, {

        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    var _this = this;

                    this._trigger = this.findBlockOn('trigger', this.getMod('type'));
                    this._trigger.bindTo('click', function() {
                        _this.setMod('focused');
                    });

                    this.on('change', _this._onChange);
                    this.bindTo('keyup', _this._onSubmit);

console.log('fucking bem_link inited');
                    //this._trigger.domElem.click();
                    //console.log(this.elem('control').bem('control').hasMod('focused'));
                    //this._trigger.click();
                }
            },
            'focused' : {
                'true' : function() {
                    this.elem('control').val(this.getVal()).focus();
                },
                '' : function() {
                    this._trigger.setVal(this.getVal());
                    this._trigger.updateContent();
                    this.emit('submit');
                }
            }
        },

        _onChange : function() {
            this._trigger.setVal(this.getVal());
        },

        _onSubmit : function(e) {
            if(e.keyCode === keyCodes.ENTER) {
                this.delMod('focused');
            }
        }
    });

    provide(Input);

});
