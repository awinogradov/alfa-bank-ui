[{
    shouldDeps: [
        { block: 'logo'},
        { block: 'menu' },
        { block: 'menu-item' },
        { block: 'link' }
    ].map(function(block) {
        block.mods = { theme: 'alfa-on-color' };
        return block;
    })
}];
