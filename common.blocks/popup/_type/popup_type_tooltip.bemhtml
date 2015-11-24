block('popup').mod('type', 'tooltip')(
    def()(function() {
        var ctx = this.ctx;
        if (!ctx.mods.target) throw Error('popup_type_tooltip: Use only for popups with the target modifier.');
        ctx.mainOffset = ctx.mainOffset || 13;
        return applyNext();
    })
);
