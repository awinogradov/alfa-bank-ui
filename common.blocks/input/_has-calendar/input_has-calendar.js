/**
 * @module input
 */
modules.define(
    'input',
    ['i-bem__dom', 'BEMHTML', 'jquery', 'dom', 'keyboard__codes', 'objects'],
    function(provide, BEMDOM, BEMHTML, $, dom, KeyCodes, objects, Input) {

/**
 * @exports
 * @class input
 * @augments control
 * @bem
 */
provide(Input.decl({ modName: 'has-calendar' }, /** @lends input.prototype */{

    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);
                this._renderCalendar();

                this._popup = this.findBlockInside('popup');
                this._calendar = this.findBlockInside('calendar');

                this._popup.setAnchor(this.domElem);
                this._calendar
                    .setVal(this.getVal())
                    .on('change', this._onChangeCalendar, this);

                this.bindTo('control', 'focus click', this.showCalendar);
                this.bindTo('control', 'blur', this._onControlBlur);
                this.bindTo('icon', 'click', this._onClickSwitcher);
                this.bindToDoc('pointerdown', this._onDocPointerDown);
                this.bindTo('keydown', this._handleKey.bind(this));
            }
        }
    },

    showCalendar: function() {

        this.setVal(this._calendar.getFormatedDate());

        if (!this.isShownCalendar()) {
            this._calendar
                .setVal(this.getVal());
            this._popup.setMod('visible', true);
        }
    },

    hideCalendar: function() {
        this._popup.delMod('visible');
        return this;
    },

    isShownCalendar: function() {
        return this._popup.hasMod('visible');
    },

    getDate: function() {
        return this._calendar.getVal();
    },

    getCalendar: function() {
        return this._calendar;
    },

    _renderCalendar: function() {
        var popupDirections = this.params.popupDirections,
            calendarParams = this.params.calendarParams,
            theme = this.getMod('theme');

        BEMDOM.append(this.elem('box'), BEMHTML.apply({
            block: 'popup',
            mods: { theme: theme, target: 'anchor' },
            directions: popupDirections,
            content: objects.extend({
                block: 'calendar',
                mods: { theme: theme },
                val: this.getVal()
            }, calendarParams)
        }));
    },

    _setFormatedDate: function() {
        this.setVal(this._calendar.getFormatedDate());
    },

    _setReadableDate: function() {
        this.hasMod('readable-date') ?
            this.setVal(this._calendar.getReadableDate()) :
            this.setVal(this._calendar.getFormatedDate());
    },

    _onChangeCalendar: function() {
        this._setReadableDate();
        this.hideCalendar();
        this.emit('pick-date');
    },

    _onControlBlur: function() {

        this._calendar.setVal(this.getVal());

        if (this._ignoreBlur) {
            this._ignoreBlur = false;
        } else {
            this._setReadableDate();
            this.hideCalendar();
        }
    },

    _onClickSwitcher: function() {
        if (!this.hasMod('disabled')) {
            if (this.isShownCalendar()) {
                this._setReadableDate();
                this.hideCalendar();
            } else {
                this._setFormatedDate();
                this._calendar.setVal(this.getVal());
                this.showCalendar();
            }
        }
    },

    _onDocPointerDown: function(e) {

        var target = $(e.target),
            insideCalendar = dom.contains(this._calendar.domElem, target);

        if (insideCalendar) {
            this._ignoreBlur = true;
        }

        if (!insideCalendar && !dom.contains(this.domElem, target)) {
            this.hideCalendar();
        }
    },

    _handleKey: function(e) {

        if (e.keyCode === KeyCodes.ENTER) {
            this._calendar
                .setVal(this.getVal());
        }

    },

}, {
    live: function() {
        return this.__base.apply(this, arguments);
    }
}));
});
