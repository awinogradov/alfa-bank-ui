([{
    shouldDeps: { block: 'popup', mods: { type: 'tooltip' } }
},
{
    tech: 'spec.js',
    shouldDeps: [
        { tech: 'js', block: 'validation' },
        { tech: 'js', block: 'form-field', mods: { type: 'input', 'has-validation': true, message: 'popup' } },
        { tech: 'bemhtml', block: 'input' },
        { tech: 'bemhtml', block: 'form-field', mods: { type: 'input', 'has-validation': true, message: 'popup' } }
    ]
}]);
