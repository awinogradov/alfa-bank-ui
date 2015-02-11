modules.define('spec-helper', ['i-bem__dom', 'BEMHTML', 'jquery'], function(provide, BEMDOM, BEMHTML, $) {

    provide({
        /**
         * Builds a block by name and bemjson
         */
        buildBlock : function(name, bemjson) {
            return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body')).bem(name);
        },

        /**
         * Clean up block
         */
        destruct : function(block) {
            BEMDOM.destruct(block.domElem);
        }
    });
});
