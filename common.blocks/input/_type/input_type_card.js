modules.define('input',
    ['jquery__formatter'],
    function(provide, $, Input) {

provide(Input.decl({ modName: 'type', modVal: 'card' }, {

    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);
                $(this.elem('control')).formatter({
                    patterns: [
                        { '\\d{17,18}': '{{9999}} {{9999}} {{9999}} {{9999}} {{99}}' },
                        { '\\d{1,16}': '{{9999}} {{9999}} {{9999}} {{9999}}' }
                    ]
                });
            }
        }
    },

    getVal: function() {
        var base = this.__base.apply(this, arguments);
        return typeof base === 'string' && base.replace(/ /g, '');
    }

}));

});
