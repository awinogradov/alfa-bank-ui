[{
    mustDeps: [{
        block: 'i-bem',
        elem: 'dom'
    }],
    shouldDeps: [
        { elems: ['inner', 'menu', 'user', 'support'] },
        { block: 'logo', mods: { theme: 'alfa-on-color', view: 'full' } },
        { block: 'menu', mods: { horizontal: true } },
        { block: 'menu-item', mods: { type: ['link', 'dropdown'] } },
        { block: 'link', mods: { pseudo: true } }
    ]
}];
