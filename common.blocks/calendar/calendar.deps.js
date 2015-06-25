[{
    mustDeps: ['i-bem'],
    shouldDeps: [
        {
            elems: ['arrow', 'day', 'dayname']
        },
        {
            mods: { theme: 'alfa', bkg: ['white', 'color'] }
        },
        {
            block: 'popup',
            mods: {
                theme: 'alfa',
                target: 'anchor'
            }
        },
        'moment'
    ]
},
{
    tech: 'js',
    mustDeps: [
        { tech: 'bemhtml', block: 'i-bem' },
        { tech: 'bemhtml', block: 'calendar' }
    ]
},
{
    tech: 'spec.js',
    mustDeps: [
        { tech: 'bemhtml', block: 'calendar' }
    ]
}];
