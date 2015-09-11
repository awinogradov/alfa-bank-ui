modules.define('state',
['i-bem__dom'],
function(provide, BEMDOM, State) {

    provide(State.decl({ modName: 'opened', modVal: true }, {
        onSetMod: {
            js: {
                'inited': function () {
                    this.findBlockInside('select').setMod('opened');
                    this.findBlockInside('popup').setMod('visible');
                }
            }
        }
    }));

});
