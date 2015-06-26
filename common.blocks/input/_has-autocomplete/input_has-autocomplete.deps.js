[{
    shouldDeps: [
        { block: 'popup', mods: { target: 'anchor', view: 'dropdown' } },
        { block: 'menu', mods: { view: 'dropdown' } },
        { block: 'menu-item' },
        { block: 'keyboard', elem: 'codes' }
    ].concat([
        { block: 'popup' },
        { block: 'menu' },
        { block: 'menu-item' }
    ].map(function(block) {
        block.mods =  { theme: 'alfa', bkg: ['color', 'white'] };
        return block;
    }))
},
{
    tech: 'spec.js',
    shouldDeps: [
        { tech: 'bemhtml', block: 'input', mods: { 'has-autocomplete': true } }
    ]
}];
