([{
    mustDeps: [
        { block: 'i-bem', elem: 'dom' },
        { block: 'icon' },
        { block: 'popup', mods: { target: 'position' } }
    ]
},
{
    tech: 'spec.js',
    shouldDeps: [
        { tech: 'bemhtml', block: 'notification' }
    ]
}]);
