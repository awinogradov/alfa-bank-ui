[{
    shouldDeps: [
        { block: 'menu' },
        { block: 'menu-item' },
        { block: 'link' }
    ].map(function(block) {
        block.mods = { theme: ['alfa-on-white', 'alfa-on-color'] };
        return block;
    })
}];
