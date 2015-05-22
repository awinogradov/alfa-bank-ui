modules.define('select',
function(provide, Select) {

    provide(Select.decl({ modName: 'width', modVal: 'available' }, {
        _updateMenuWidth: function() {
            this._menu.domElem.css('min-width', this._button.domElem.outerWidth());
            this._menu.domElem.css('max-width', this._button.domElem.outerWidth());

            this._popup.redraw();
        },
    }));

});
