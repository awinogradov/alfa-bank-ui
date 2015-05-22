[{
    shouldDeps: [
        {
            block: 'input',
            mods: { 'has-addon': true }
        },
        {
            block: 'icon',
            mods: { theme: 'alfa', bkg: ['white', 'color'], tool: 'calendar' }
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
}]
