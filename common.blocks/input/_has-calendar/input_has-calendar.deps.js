([{
    mustDeps: [
        {
            block: 'i-bem'
        },
        {
            block: 'calendar',
            mods: { theme: ['alfa-on-color', 'alfa-on-white'] }
        },
        'objects'
    ],
    shouldDeps: [
        {
            block: 'popup',
            mods: { target: 'anchor' }
        },
        {
            block: 'input',
            mods: { 'has-mask': true }
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
        }
    ]
},
{
    tech: 'js',
    mustDeps: [
        { tech: 'bemhtml', block: 'i-bem' },
        { tech: 'bemhtml', block: 'calendar' },
        { tech: 'bemhtml', block: 'popup', mods: { target: 'anchor' } }
    ]
},
{
    tech: 'spec.js',
    mustDeps: [
        { tech: 'bemhtml', block: 'input', mods: { 'has-calendar': true } }
    ]
}]);
