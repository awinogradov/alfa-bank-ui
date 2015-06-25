[{
    shouldDeps: [
        {
            block: 'input',
            mods: { 'has-addon': true, 'has-mask': true }
        },
        {
            block: 'icon',
            mods: { theme: 'alfa', bkg: ['white', 'color'], tool: 'calendar' }
        },
        {
            block: 'keyboard',
            elem: 'codes'
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
