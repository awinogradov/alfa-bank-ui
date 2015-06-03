[{
    mustDeps: [{
        block: 'i-bem',
        elem: 'dom'
    }],
    shouldDeps: [
        { elems: ['inner', 'menu', 'user', 'support'] },
        { block: 'logo', mods: { view: 'full' } },
        { block: 'menu', mods: { horizontal: true } },
        { block: 'menu-item', mods: { type: 'link' } },
        { block: 'menu-item', mods: { type: 'dropdown' } }
    ].concat([
        { block: 'logo' },
        { block: 'menu' },
        { block: 'menu-item' }
    ].map(function(block) {
        block.mods = { theme: 'alfa', bkg: 'color' };
        return block;
    }))
}];
