/**
 * @module input
 */
modules.define('input', [], function(provide, Input) {

    provide(Input.decl({ modName: 'has-filter' }, {

        onSetMod: {
            'js': {
                'inited': function() {
                    this.__base.apply(this, arguments);

                    if (!this.hasMod('has-autocomplete')) {
                        console.error('\'has-filter\' should only be used with \'has-autocomplete\'');
                        return;
                    }

                    this._lastVal = this.getVal();
                    this._filter = defaultFilter;

                    this.on('change', handleChange, this);
                }
            }
        },

        /**
         * Set custom filter function
         * @param {Function} filter function(item, val) which should return whether item should be shown
         */
        setFilter: function(filter) {
            this._filter = filter;
        },

        /**
         * Filter autocomplete items
         * Use to manually trigger filtering when needed
         */
        filter: function(val) {
            var menu = this.getMenu();

            if (!val) val = this.getVal();

            // TODO cache menu-item's
            menu.findBlocksInside('menu-item').forEach(function(item) {
                if (this._filter(item, val)) {
                    item.delMod('hidden');
                } else {
                    item.setMod('hidden');
                }
            }.bind(this));

            // hide empty groups
            var $groups = menu.domElem.children('.menu__group');
            $groups.hide();
            $groups.has('.menu-item:not(.menu-item_hidden)').show();

            // reset focused item if it was filter out
            if (this._menuItems && (typeof this._focusedItem !== 'undefined') &&
                    this._menuItems[this._focusedItem] &&
                    this._menuItems[this._focusedItem].hasMod('hidden')) {
                this._resetFocusedItem();
            }

            this._lastVal = val;
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
        var val = this.getVal();
        this.filter(val);
    }

});
