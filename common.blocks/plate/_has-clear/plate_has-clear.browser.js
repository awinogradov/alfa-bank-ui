/**
 * @module plate_has-clear
 */

modules.define('plate', function(provide, Plate) {

    Plate.decl({ modName : 'has-clear', modVal : true },

        /** @lends plate_has-clear.prototype */
        {
            onSetMod : {
                'js' : {}
            },
            _onClick : function() {
                this.setMod('hidden');
                this.emit('hide');
            }
        },
        /** @lends plate_has-clear */{
            live: function () {
                this.liveBindTo('clear', 'pointerclick', function () {
                    this._onClick();
                });
            }
        }
    );

    /**
     * @exports
     * @class plate_has-clear
     * @bem
     */
    provide(Plate);
});
