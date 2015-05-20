/**
 * @module input
 */
modules.define('input', ['i-bem__dom', 'jquery', 'dom'], function(provide, BEMDOM, $, dom, Input) {

/**
 * @exports
 * @class input
 * @augments control
 * @bem
 */
provide(Input.decl({ modName: 'has-calendar' }, /** @lends input.prototype */{
    onSetMod: {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this._calendar = this.findBlockInside('calendar');

                this._calendar
                    .setVal(this.getVal())
                    .setAnchor(this.domElem)
                    .on('change', this._onChangeCalendar, this);

                this.bindTo('control', 'focus pointerclick', this.showCalendar);
                this.bindTo('control', 'blur', this._onControlBlur);
                this.bindTo('calendar', 'pointerclick', this._onPointerClickSwicher);
                this.bindToDoc('pointerdown', this._onDocPointerDown);
            }
        }
    },
    showCalendar : function() {
        if(!this._calendar.isShown()) {
            this._calendar
                .setVal(this.getVal())
                .show();
        }
    },
    _onChangeCalendar : function(e, data) {
        this.setVal(data.formated);
    },
    _onControlBlur : function(e) {
        if(this._ignoreBlur) {
            this._ignoreBlur = false;
        } else {
            this._calendar.hide();
        }
    },
    _onPointerClickSwicher : function() {
        if(!this.hasMod('disabled')) {
            if(this._calendar.isShown()) {
                this._calendar.hide();
            } else {
                this._calendar
                    .setVal(this.getVal())
                    .show();
            }
        }
    },
    _onDocPointerDown : function(e) {

        var target = $(e.target),
            insideCalendar = dom.contains(this._calendar.domElem, target);

        if(insideCalendar) {
            this._ignoreBlur = true;
        }

        if(!insideCalendar && !dom.contains(this.domElem, target)) {
            this._calendar.hide();
        }
    }
}));
});
