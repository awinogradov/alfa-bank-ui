modules.define('popup', ['objects'], function(provide, objects, Popup) {
    var DEFAULT_DIRECTIONS = [
        'bottom-left', 'bottom-center', 'bottom-right',
        'top-left', 'top-center', 'top-right',
        'right-top', 'right-center', 'right-bottom',
        'left-top', 'left-center', 'left-bottom'
    ];

    provide(Popup.decl(this.name, {
        getDefaultParams : function() {
            return objects.extend(
                this.__base.apply(this, arguments),
                {
                    mainOffset : 0,
                    secondaryOffset : 0,
                    viewportOffset : 0,
                    directions : DEFAULT_DIRECTIONS
                });
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
