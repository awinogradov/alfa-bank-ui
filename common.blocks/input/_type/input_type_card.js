modules.define('input',
    ['jquery__mask', 'jquery__numeric'],
    function(provide, $, $, Input) {

provide(Input.decl({ modName : 'type', modVal : 'card' }, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                $(this.elem('control'))
                    .numeric()
                    .mask('0000 0000 0000 0000ZZ', {
                        translation : {
                            'Z' : {
                                pattern: /[0-9]/,
                                optional: true
                            }
                        }
                    });
            }
        }
    },

    getVal : function() {
        var base = this.__base.apply(this, arguments);
        return typeof base === 'string' && base.replace(/ /g, '');
    }

}));

});
