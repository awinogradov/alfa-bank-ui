modules.define('input',
    ['jquery__formatter'],
    function(provide, $, Input) {

provide(Input.decl({ modName: 'has-mask', modVal: true }, {

    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                $(this.elem('control')).formatter({
                    pattern: this.params.mask
                });
            }
        }
    }

}));

});
