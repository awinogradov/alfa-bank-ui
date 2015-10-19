modules.define('dropdown',
    function(provide, Dropdown) {

provide(Dropdown.decl({ modName: 'mode', modVal: 'hover' }, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                var _this = this,
                    switcher = _this.getSwitcher(),
                    popup = _this.getPopup();

                switcher.on({ modName: 'hovered', modVal: '*' }, function(e, data) {
                    setTimeout(function() {
                        _this.setMod('opened', data.modVal);
                    }, 50);
                });
            }
        }
    }
},
{
    live: false
}));

});
