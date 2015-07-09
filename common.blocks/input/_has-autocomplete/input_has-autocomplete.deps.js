[{
    shouldDeps: [
        { block: 'popup', mods: { target: 'anchor', view: 'dropdown' } },
        { block: 'menu', mods: { view: 'dropdown' } },
        { block: 'menu-item' },
        { block: 'keyboard', elem: 'codes' }
    ]
},
{
    tech: 'spec.js',
    shouldDeps: [
        { tech: 'bemhtml', block: 'input', mods: { 'has-autocomplete': true } }
    ]
}];
