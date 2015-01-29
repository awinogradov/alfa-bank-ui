/**
 * @module link
 */

modules.define('link', function(provide, Link) {

    /**
     * @exports
     * @class link
     * @augments control
     * @bem
     */
    provide(Link.decl({ modName : 'pseudo', modVal : true},{

        onSetMod : {
            'js' : {
                'inited' : function() {
                    this._val = null;
                }
            }
        },

        /**
         * Returns val
         * @returns {String}
         */
        getVal : function() {
            return this._val;
        },

        /**
         * Sets val
         * @param {String} val
         */
        setVal : function(val) {
            this._val = val;
            this.domElem.text(this._val);
        }
    }));

});
