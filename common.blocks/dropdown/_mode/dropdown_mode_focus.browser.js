modules.define('dropdown',
    function(provide, Dropdown) {

provide(Dropdown.decl({ modName: 'mode', modVal: 'focus' }, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                var _this = this,
                    switcher = this.getSwitcher();

                switcher.on({ modName: 'focused', modVal: '*' }, function(e, data) {
                    _this.setMod('opened', data.modVal);
                });
            }
        }
    }
}));

});
