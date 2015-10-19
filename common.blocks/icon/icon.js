modules.define('icon',
    ['i-bem__dom', 'control', 'events'],
    function(provide, BEMDOM, Control, events) {

provide(BEMDOM.decl({ block: this.name, baseBlock: Control }, {

    _onPointerClick: function(e) {
        if (this.hasMod('disabled')) {
            e.preventDefault();
        } else {
            var event = new events.Event('click');
            this.emit(event);
            event.isDefaultPrevented() && e.preventDefault();
        }
    }

}, /** @lends icon */{
    live: function() {
        this.liveBindTo('control', 'pointerclick', this.prototype._onPointerClick);
        return this.__base.apply(this, arguments);
    }
}));

});
