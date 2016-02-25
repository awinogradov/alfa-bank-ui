([{
    mustDeps: [
        { block: 'mq' }
    ]
},{
    tech: 'spec.js',
    shouldDeps: [
        { tech: 'js', block: 'validation' },
        { tech: 'js', block: 'form-field', mods: { type: 'input', message: 'popup' } },
        { tech: 'bemhtml', block: 'input' },
        { tech: 'bemhtml', block: 'form-field', mods: { type: 'input', message: 'popup' } }
    ]
}]);
