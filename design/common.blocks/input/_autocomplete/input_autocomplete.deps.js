({
    shouldDeps : [
        { block : 'popup' },
        { block : 'menu' },
        { block : 'menu-item' }
    ].map(function(block) {
        block.mods =  { theme : 'alfa', bkg : 'color' };
        return block;
    })
    .concat([
        { block : 'popup' },
        { block : 'menu' },
        { block : 'menu-item' }
    ].map(function(block) {
        block.mods =  { theme : 'alfa', bkg : 'white' };
        return block;
    }))
})
