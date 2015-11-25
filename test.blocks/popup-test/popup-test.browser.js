/* global modules:false */

/**
 * @module popup-test
 */

modules.define(
    'popup-test',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

/**
 * @exports
 * @class popup-test
 * @bem
 */
provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                var anchor = this.findBlockInside(this.params.anchor),
                    popup = this.findBlockInside('popup');

                popup.setAnchor(anchor);

                anchor.on('click', function() {
                    popup.toggleMod('visible');
                });
            }
        }
    }
}));

});

