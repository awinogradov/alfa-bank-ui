/**
 * @module input
 */
modules.define('input', [], function(provide, Input) {

    provide(Input.decl({ modName : 'has-filter' }, {

        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    if(!this.hasMod('has-autocomplete')) {
                        console.error('\'has-filter\' should only be used with \'has-autocomplete\'');
                        return;
                    }

                    this._lastVal = this.getVal();
                    this._filter = defaultFilter;

                    this.on('change', handleChange.bind(this));
                }
            }
        },

        /**
         * Set custom filter function.
         * @param {Function} filter function(item, val) which should return whether item should be shown
         */
        setFilter : function(filter) {
            this._filter = filter;
        }

    }));

    /**
     * Default filter function
     * @private
     */
    function defaultFilter(item, val) {
        return !val || item.domElem.text().match(val);
    }

    /**
     * Input value change handler
     * @private
     */
    function handleChange(e) {
        var val = this.elem('control').val();

        if(val != this._lastVal) {
            // TODO cache menu-item's
            this.getMenu().findBlocksInside('menu-item').forEach(function(item) {
                if(this._filter(item, val)) {
                    item.delMod('hidden');
                } else {
                    item.setMod('hidden');
                }
            }.bind(this));

            this._lastVal = val;
        }
    }

});
