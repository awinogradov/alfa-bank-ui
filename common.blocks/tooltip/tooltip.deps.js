[{
    mustDeps: [
        { block: 'i-bem', elems: 'dom' }
    ],
    shouldDeps: [
        { block: 'control' },
        { block: 'popup', mods: { theme: 'alfa-on-color', target: 'anchor' } }
    ]
},
{
    tech: 'spec.js',
    shouldDeps: [
        { tech: 'bemhtml', block: 'tooltip' },
        { tech: 'bemhtml', block: 'popup', mods: { target: 'anchor' } }
    ]
}];
