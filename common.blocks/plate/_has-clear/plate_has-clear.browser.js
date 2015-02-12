/**
 * @module plate_has-clear
 */

modules.define('plate', function(provide, Plate) {

    /**
     * @exports
     * @class plate_has-clear
     * @bem
     */
    Plate.decl({ modName : 'has-clear', modVal : true }, {

            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this.bindTo('clear', 'click', function (){
                            this._onClick();
                        });
                    }
                }
            },
            _onClick : function() {
                this.setMod('hidden');
                this.emit('hide');
            }
        }
    );

    provide(Plate);
});
