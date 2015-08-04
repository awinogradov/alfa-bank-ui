/**
 * @module input
 */
modules.define(
    'input',
    ['i-bem__dom', 'jquery', 'dom', 'keyboard__codes'],
    function(provide, BEMDOM, $, dom, KeyCodes, Input) {

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

                this._calendar = this.findBlockInside('calendar');

                this._calendar
                    .setVal(this.getVal())
                    .setAnchor(this.domElem)
                    .on('change', this._onChangeCalendar, this);

                this.bindTo('control', 'focus pointerclick', this.showCalendar);
                this.bindTo('control', 'blur', this._onControlBlur);
                this.bindTo('calendar', 'pointerclick', this._onPointerClickSwitcher);
                this.bindToDoc('pointerdown', this._onDocPointerDown);
                this.bindTo('keydown', this._handleKey.bind(this));
            }
        }
    },

    showCalendar: function() {

        this.setVal(this._calendar.getFormatedDate());

        if (!this._calendar.isShown()) {
            this._calendar
                .setVal(this.getVal())
                .show();
        }
    },

    getDate: function() {
        return this._calendar.getVal();
    },

    getCalendar: function() {
        return this._calendar;
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
        this.emit('pick-date');
    },

    _onControlBlur: function() {

        this._calendar.setVal(this.getVal());

        if (this._ignoreBlur) {
            this._ignoreBlur = false;
        } else {
            this._setReadableDate();
            this._calendar.hide();
        }
    },

    _onPointerClickSwitcher: function() {
        if (!this.hasMod('disabled')) {
            if (this._calendar.isShown()) {
                this._setReadableDate();
                this._calendar.hide();
            } else {
                this._setFormatedDate();
                this._calendar
                    .setVal(this.getVal())
                    .show();
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
            this._calendar.hide();
        }
    },

    _handleKey: function(e) {

        if (e.keyCode === KeyCodes.ENTER) {
            this._calendar
                .setVal(this.getVal())
                .reBuild();
        }

    }

}));
});
