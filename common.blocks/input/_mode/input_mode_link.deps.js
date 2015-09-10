[{
    mustDeps: { block: 'i-bem', elem: 'dom' },
    shouldDeps: [
        { block: 'keyboard', elem: 'codes' },
        { block: 'link' },
        { block: 'link', mods: { view: 'pseudo' } }
    ]
},
{
    tech: 'spec.js',
    mustDeps: [
        { tech: 'bemhtml', block: 'input', mods: { mode: 'link' } },
        { block: 'link' },
        { block: 'link', mods: { view: 'pseudo' } }
    ]
}];
