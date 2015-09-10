/**
 * @module link
 */

modules.define('link', ['keyboard__codes'], function(provide, keyCodes, Link) {

/**
 * @exports
 * @class link
 * @bem
 */
provide(Link.decl({ modName: 'view', modVal: 'pseudo' }, /** @lends link.prototype */{
    onSetMod: {
        'focused': {
            'true': function() {
                this.__base.apply(this, arguments);

                this.bindTo('control', 'keydown', this._onKeyDown);
            },
            '': function() {
                this.__base.apply(this, arguments);

                this.unbindFrom('control', 'keydown', this._onKeyDown);
            }
        }
    },

    _onPointerClick: function(e) {
        this.__base.apply(this, arguments);
    },

    _onKeyDown: function(e) {
        e.keyCode === keyCodes.ENTER && this._onPointerClick(e);
    }
}));

});
