/* istanbul ignore next text */
modules.define('header',
    function(provide, Header) {

provide(Header.decl({ modName: 'theme', modVal: 'alfa-on-white' }, {

    _colorize: function() {
        this.__base.apply(this, arguments);

        this._isColorise ?
            this._innerBlocksSetTheme('alfa-on-color') :
            this._innerBlocksSetTheme('alfa-on-white');
    },

    _innerBlocksSetTheme: function(theme) {
        ['menu', 'menu-item', 'link'].forEach(function(blockName) {
            this.findBlocksInside('content', blockName)
                .forEach(function(block) {
                    block.setMod('theme', theme);
                });
        }, this);
    }

}));

});
