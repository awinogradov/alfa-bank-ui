modules.define('dropdown',
    function(provide, Dropdown) {

provide(Dropdown.decl({ modName: 'mode', modVal: 'hover' }, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                var switcher = this.getSwitcher(),
                    popup = this.getPopup();

                switcher.on({ modName: 'hovered', modVal: '*' }, function(e, data) {
                    this.setMod('opened', data.modVal);
                }, this);
            }
        }
    }
}));

});
