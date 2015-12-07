[{
    tech: 'spec.js',
    shouldDeps: [
        { tech: 'js', block: 'validation' },
        { tech: 'js', block: 'form-field', mods: { type: 'input', 'has-validation': true, message: 'text' } },
        { tech: 'bemhtml', block: 'input', mods: { 'has-autocomplete': true } },
        { tech: 'bemhtml', block: 'form-field', mods: { type: 'input', 'has-validation': true, message: 'text' } }
    ]
}];
