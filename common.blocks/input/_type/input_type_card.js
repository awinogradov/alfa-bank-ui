modules.define('input', ['jquery__mask'], function(provide, $, Input) {

    provide(Input.decl({ modName : 'type', modVal : 'card' }, {

        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);
                    $(this.elem('control')).mask(
                        '0000 0000 0000 0000ZZ',
                        {translation:  {'Z': {pattern: /[0-9]/, optional: true}}}
                    );
                }
            }
        }

    }));
});
