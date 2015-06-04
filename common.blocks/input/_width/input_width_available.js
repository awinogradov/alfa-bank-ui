modules.define('input',
function(provide, Input) {

    provide(Input.decl({ modName: 'width', modVal: 'available' }, {
        _updateMenuWidth: function() {
            this._popup.domElem.css('min-width', this.domElem.outerWidth());
            this._popup.domElem.css('max-width', this.domElem.outerWidth());
            this._popup.redraw();
        },
    }));

});
