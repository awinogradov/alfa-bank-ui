[{
    mustDeps : ['i-bem'],
    shouldDeps : [
        {
            elems : ['arrow', 'day', 'dayname']
        },
        {
            mods : { theme : 'alfa' }
        },
        {
            block : 'popup',
            mods : {
                theme : 'alfa',
                target : 'anchor'
            }
        }
    ]
},
{
    tech : 'js',
    mustDeps : [
        { tech : 'bemhtml', block : 'i-bem' },
        { tech : 'bemhtml', block : 'calendar' }
    ]
}]
