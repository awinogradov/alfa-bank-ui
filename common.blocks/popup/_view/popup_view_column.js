modules.define('popup', [], function(provide, Popup) {
    provide(Popup.decl({ modName: 'view', modVal: 'column' }, {
        getDefaultParams: function() {
            return {
                mainOffset: 0,
                secondaryOffset: 0,
                viewportOffset: 0,
                directions: ['top-left']
            };
        }
    }));
});
