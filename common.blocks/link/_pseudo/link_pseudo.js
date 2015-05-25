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
    Link.decl({ modName: 'pseudo', modVal: true }, {

        onSetMod: {
            'js': {
                'inited': function() {
                    this._val = this.domElem.text();
                }
            }
        },
        /**
         * Returns val
         * @returns {String}
         */
        getVal: function() {
            return this._val;
        },
        /**
         * Sets val
         * @param {String} val
         */
        setVal: function(val) {
            this._val = val;
            this.updateContent();
        },
        /**
         * Update text on link
         */
        updateContent: function() {
            this.domElem.text(this._val);
        }
    });

provide(Link);

});
