[{
    mustDeps: [{
        block: 'i-bem',
        elem: 'dom'
    }],
    shouldDeps: [
        { elems: ['inner', 'menu', 'user', 'support'] },
        { block: 'logo', mods: { view: 'full' } },
        { block: 'menu', mods: { horizontal: true } },
        { block: 'menu-item', mods: { type: ['link', 'dropdown'] } },
        { block: 'link', mods: { pseudo: true } }
    ]
}];
