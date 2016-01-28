block('popup')(
    match(function() { return this._popup; }).def()(function() {
        var mods = this._popup.mods;
        var ctx = this.ctx;
        this.mods.type = ctx.mods.type || mods.type;
        this.ctx.directions = ctx.directions || this._popup.directions;

        return applyNext();
    })
);
