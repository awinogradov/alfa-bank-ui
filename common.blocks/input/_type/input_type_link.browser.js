/**
 * @module input
 */

modules.define('input',
    ['i-bem__dom', 'keyboard__codes'],
    function(provide, BEMDOM, keyCodes) {

/**
 * @exports
 * @class input
 * @bem
 */
provide(BEMDOM.decl({ block : this.name, modName : 'type', modVal : 'link' }, {

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
}));

});
