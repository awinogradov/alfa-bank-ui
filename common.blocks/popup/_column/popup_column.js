modules.define('popup', [], function(provide, Popup) {
    provide(Popup.decl({ modName : 'column', modVal : true }, {
        getDefaultParams : function() {
            return {
                mainOffset : 0,
                secondaryOffset : 0,
                viewportOffset : 0,
                directions : ['top-left']
            };
        },

        _calcTargetDimensions : function() {
            var anchor = this._anchor,
            anchorOffset = anchor.offset();

            return {
                left : anchorOffset.left,
                top : anchorOffset.top,
                width : anchor.outerWidth(),
                height : anchor.outerHeight()
            };
        },
    }));
});
