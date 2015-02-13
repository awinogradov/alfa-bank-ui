[{
    shouldDeps : [
        { block : 'copyright' },
        { block : 'menu', mods : {  horizontal : true } }
    ].concat([
        { block : 'menu' },
        { block : 'menu-item' }
    ].map(function(block) {
        block.mods = { theme : 'alfa', bkg : 'color' };
        return block;
    }))
}]
