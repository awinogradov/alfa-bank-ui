modules.define('input', ['jquery__mask'], function(provide, $, Input) {

    provide(Input.decl({ modName : 'type', modVal : 'mask' }, {

        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    $(this.elem('control')).mask(this.params.mask, this.params.options);
                }
            }
        }

    }));
});
