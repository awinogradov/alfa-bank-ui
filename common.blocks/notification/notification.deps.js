([{
    mustDeps: [
        { block: 'i-bem', elem: 'dom' },
        { block: 'icon', mods: { theme: 'alfa-on-colored' } },
        { block: 'popup', mods: { target: 'position' } }
    ]
},
{
    tech: 'spec.js',
    shouldDeps: [
        { tech: 'bemhtml', block: 'notification' }
    ]
}]);
