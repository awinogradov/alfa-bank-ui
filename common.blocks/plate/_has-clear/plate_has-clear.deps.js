([{
    shouldDeps: [
        { elem: 'clear' },
        { block: 'plate', mods: { 'has-clear': true } },
        {
            block: 'icon',
            mods: { theme: 'alfa-on-white', tool: 'close' }
        }
    ]
},
{
    tech: 'spec.js',
    mustDeps: [
        { tech: 'bemhtml', block: 'plate', mods: { 'has-clear': true } }
    ]
}]);
