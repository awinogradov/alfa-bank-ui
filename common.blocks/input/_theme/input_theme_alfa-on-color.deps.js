[{
    shouldDeps: [
        { block: 'icon' },
        { block: 'link' },
        { block: 'popup' },
        { block: 'menu' },
        { block: 'menu-item' }
    ].map(function(block) {
        block.mods = { theme: 'alfa-on-color' };
        return block;
    })
}];
