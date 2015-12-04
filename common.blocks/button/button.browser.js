/* global modules:false */

/**
 * @module button
 */

modules.define(
    'button',
    function(provide, Button) {

/**
 * @exports
 * @class button
 * @bem
 */
provide(Button.decl({
    onSetMod: {
        'checked': function(_, isChecked) {
            this.__base.apply(this, arguments);
            isChecked ?
                this.setMod('view', this.params.checkedView) :
                this.delMod('view');
        }
    }
}));

});

