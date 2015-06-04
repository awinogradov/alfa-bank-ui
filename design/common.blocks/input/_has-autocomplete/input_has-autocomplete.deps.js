[{
    shouldDeps: [
        { block: 'popup' },
        { block: 'menu' },
        { block: 'menu-item' }
    ].map(function(block) {
        block.mods =  { theme: 'alfa', bkg: ['color', 'white'] };
        return block;
    })
}];
