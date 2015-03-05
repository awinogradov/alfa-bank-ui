[{
    mustDeps : { block : 'i-bem', elem : 'dom' },
    shouldDeps : [
        { block : 'keyboard', elem : 'codes' },
        { block : 'link' },
        { block : 'link', mod : 'pseudo' },
        { block : 'link', mods : { theme : 'alfa', bkg : 'color' } },
        { block : 'link', mods : { theme : 'alfa', bkg : 'white' } }
    ]
},
{
    tech : 'spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'input', mods : { mode : 'link' } },
        { block : 'link' },
        { block : 'link', mod : 'pseudo' }
    ]
}]
