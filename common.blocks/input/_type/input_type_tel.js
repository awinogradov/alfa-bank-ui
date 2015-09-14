modules.define('input',
    ['jquery__formatter'],
    function(provide, $, Input) {

provide(Input.decl({ modName: 'type', modVal: 'tel' }, {

    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);
                $(this.elem('control')).formatter({
                    patterns: [
                        { '\\d{1,11}': '+{{9}} {{999}} {{999}}-{{99}}-{{99}}' }
                    ]
                });
            }
        }
    }

}));

});
