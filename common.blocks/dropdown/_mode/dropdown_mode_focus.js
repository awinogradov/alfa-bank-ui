modules.define('dropdown',
    function(provide, Dropdown) {

provide(Dropdown.decl({ modName: 'mode', modVal: 'focus' }, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                var switcher = this.getSwitcher();

                switcher.on({ modName: 'focused', modVal: '*' }, function(e, data) {
                    this.setMod('opened', data.modVal);
                }, this);
            }
        }
    }
}));

});
