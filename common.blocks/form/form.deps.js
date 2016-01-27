([{
    tech: 'spec.js',
    shouldDeps: [
        { tech: 'js', block: 'validation' },
        { tech: 'js', block: 'form' },
        { tech: 'js', block: 'form', mods: { message: 'text' } },
        { tech: 'js', block: 'input' },
        { tech: 'js', block: 'form-field', mods: { required: true, type: 'input', 'has-validation': true, message: 'popup' } },
        { tech: 'bemhtml', block: 'form' },
        { tech: 'bemhtml', block: 'form', mods: { message: 'text' } },
        { tech: 'bemhtml', block: 'input' },
        { tech: 'bemhtml', block: 'form-field', mods: { required: true, type: 'input', 'has-validation': true, message: 'popup' } }
    ]
}]);
