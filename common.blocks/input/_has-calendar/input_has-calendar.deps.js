[{
    shouldDeps: [
        {
            block: 'input',
            mods: { 'has-addon': true, 'has-mask': true }
        },
        {
            block: 'icon',
            mods: { tool: 'calendar' }
        },
        {
            block: 'keyboard',
            elem: 'codes'
        },
        {
            elems: ['calendar']
        },
        'ua',
        'calendar'
    ]
},
{
    tech: 'spec.js',
    mustDeps: [
        { tech: 'bemhtml', block: 'input', mods: { 'has-calendar': true } }
    ]
}];
