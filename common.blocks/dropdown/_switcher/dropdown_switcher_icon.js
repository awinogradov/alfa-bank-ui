/**
 * @module dropdown
 */

modules.define('dropdown', function(provide, Dropdown) {

/**
 * @exports
 * @class dropdown
 * @bem
 */
provide(Dropdown.decl({ modName: 'switcher', modVal: 'icon' }, null, /** @lends dropdown */{
    live: function() {
        this.liveInitOnBlockInsideEvent('click', 'icon', this.onSwitcherClick);
        return this.__base.apply(this, arguments);
    }
}));

});
