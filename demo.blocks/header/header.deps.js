[{
    shouldDeps : [
        { block : 'logo', mods : { view : 'full' } },
        { block : 'menu', mods : { horizontal : true } },
        { block : 'menu-item', mods : { type : 'link' } },
    ].concat([
        { block : 'logo' },
        { block : 'menu' },
        { block : 'menu-item' },
        { block : 'link' },
    ].map(function(block) {
        block.mods = { theme : 'alfa', bkg : 'color' };
        return block;
    }))
}]
