[{
    shouldDeps: [
        {
            block: 'popup',
            mods: { target: 'anchor' }
        }
    ]
},
{
    tech: 'spec.js',
    shouldDeps: [
        {
            tech: 'js',
            block: 'popup',
            mods: { target: 'anchor' }
        },
        { tech: 'bemhtml', block: 'message', mods: { type: 'popup' } }
    ]
}];
