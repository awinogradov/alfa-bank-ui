[{
    shouldDeps: [
        { block: 'variables' },
        { block: 'copyright' },
        { block: 'menu', mods: { horizontal: true } }
    ].concat([
        { block: 'menu' },
        { block: 'menu-item' }
    ].map(function(block) {
        block.mods = { theme: 'alfa-on-color' };
        return block;
    }))
}];
