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
Input.decl({ block : this.name, modName : 'mode', modVal : 'link' }, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                var _this = this;

                this._trigger = this.findBlockOn('trigger', this.getMod('mode'));
                this.bindTo('click', function() {
                    _this.setMod('focused');
                });
                this._placeholder = this.elem('control').attr('placeholder') || '';

                this.on('change', _this._onChange);
                this.bindTo('keyup', _this._onSubmit);
            }
        },
        'focused' : {
            'true' : function() {
                this.elem('control').val(this.getVal()).focus();
            },
            '' : function() {
                this._trigger.setVal(this.getVal() || this.getPlaceholder());
                this._trigger.updateContent();
                this.emit('submit');
            }
        }
    },

    getPlaceholder : function() {
        return this._placeholder;
    },

    _onChange : function() {
        this._trigger.setVal(this.getVal() || this.getPlaceholder());
        this.getVal() ? this.delMod('empty') : this.setMod('empty');
    },

    _onSubmit : function(e) {
        if(e.keyCode === keyCodes.ENTER) {
            this.toggleMod('focused');
        }
    }
});

provide(Input);

});
