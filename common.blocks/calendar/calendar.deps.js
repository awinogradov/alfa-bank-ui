[{
    mustDeps: [
        'i-bem'
    ],
    shouldDeps: [
        {
            elems: ['arrow', 'day', 'dayname']
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
