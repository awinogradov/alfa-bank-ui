modules.define('popup', ['objects'], function(provide, objects, Popup) {
    provide(Popup.decl({ block: this.name, modName : 'target', modVal : 'anchor' }, {
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
