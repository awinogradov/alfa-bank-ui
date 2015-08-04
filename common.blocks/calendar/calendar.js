/**
 * @module calendar
 */
modules.define(
    'calendar',
    ['i-bem__dom', 'BEMHTML', 'jquery', 'moment'],
    function(provide, BEMDOM, BEMHTML, $, moment) {

/**
 * @exports
 * @class calendar
 * @augments control
 * @bem
 */
provide(BEMDOM.decl({ block: this.name }, /** @lends calendar.prototype */{
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                this._val = null;

                this._popup = this.domElem.bem('popup');

                this._month = moment(this._getToday()).set('date', 1).format();

                this.setLimits(
                    this.params.earlierLimit,
                    this.params.laterLimit
                );
            }
        }
    },

    /**
     * Set value
     *
     * @param {Date|string} val
     * @returns {calendar} this
     */
    setVal: function(val) {
        var date = this.parseDate(val);

        this._val = this._isValidDate(moment(date).set('hour', 1).format()) ? date : null;

        if (this._val) {
            this._month = moment(this._val).set('date', 1).format();
        }

        return this;
    },

    /**
     * Get value
     *
     * @returns {?Date}
     */
    getVal: function() {
        return this._val ? new Date(this._val) : '';
    },

    /**
     * Get formated Date
     *
     * @returns {String} DD.MM.YYYY
     */
    getFormatedDate: function() {
        return this.getVal() ? this._formatDate(this.getVal()) : '';
    },

    /**
     * Get readable format Date
     *
     * @returns {String} DD MMMM YYYY
     */
    getReadableDate: function() {
        return this.getVal() ? moment(this.getVal()).format('DD MMMM YYYY') : '';
    },

    /**
     * Show calendar
     *
     * @returns {calendar} this
     */
    show: function() {
        this._build();

        this._popup.setMod('visible', true);

        return this;
    },

    /**
     * Hide calendar
     *
     * @returns {calendar} this
     */
    hide: function() {
        this._popup.delMod('visible');

        return this;
    },

    /**
     * Is shown calendar?
     *
     * @returns {boolean}
     */
    isShown: function() {
        return this._popup.hasMod('visible');
    },

    /**
     * Switch month
     *
     * @param {number} step
     * @returns {calendar} this
     */
    switchMonth: function(step) {
        this._month = moment(this._month).month(moment(this._month).month() + step);

        this._build();

        return this;
    },

    /**
     * Parse date
     *
     * param {Date|string} val
     * @returns {?Date} this
     */
    parseDate: function(val) {
        if (moment.isDate(val)) {
            return val;
        }

        var iso = moment(val, ['DD-MM-YYYY', 'YYYY-MM-DD', 'DD MMMM YYYY'], 'ru');

        return iso.isValid() ? iso.format() : null;
    },

    /**
     * Set target
     *
     * @param {jQuery|BEMDOM} anchor - DOM elem or anchor BEMDOM block.
     * @returns {calendar} this
     */
    setAnchor: function(anchor) {
        this._popup.setAnchor(anchor);

        return this;
    },

    /**
     * Sets directions for calendar.
     *
     * @param {Array<string>} directions
     * @returns {calendar} this
     */
    setDirections: function(directions) {
        this._popup.params.directions = directions;

        return this;
    },

    /**
     * Sets limits
     *
     * @param {Date|String} earlier
     * @param {Date|String} later
     * @returns {calendar} this
     */
    setLimits: function(earlier, later) {
        this._earlierLimit = this.parseDate(earlier);
        this._laterLimit = this.parseDate(later);

        if (earlier && moment(this._month).isBefore(this._earlierLimit, 'month')) {
            this._month = moment(this._earlierLimit).set('date', 1).format();
        }

        if (later && moment(this._laterLimit).isBefore(this._month, 'month')) {
            this._month = moment(this._laterLimit).set('date', 1).format();
        }

        return this;
    },

    /**
     * Sets off days for calendar.
     *
     * @param {Array} days
     * @returns {Array}
     */
    setOffDays: function(days) {
        this.params.offDays = days;
    },

    /**
     * Get off days for calendar.
     *
     * @returns {Array}
     */
    getOffDays: function() {
        return this.params.offDays;
    },

    /**
     * Check off days for calendar.
     *
     * @param {Date} date
     * @returns {boolean}
     */
    _isOffDay: function(date) {

        var offDays = this.getOffDays() || [];
        var value = moment(this.parseDate(date));

        for (var i in offDays) {
            if (value.isSame(this.parseDate(offDays[i]))) return true;
        }

        return false;
    },

    _getToday: function() {
        return moment().set({ hour: 0, minute: 0, second: 0 }).format();
    },

    _formatDate: function(date) {
        var value = moment(date);
        return value.isValid() ? value.format('DD.MM.YYYY') : '';
    },

    _isValidDate: function(date) {
        var value = moment(date);
        return value.isValid() ?
            !(this._earlierLimit && value.isBefore(this._earlierLimit) ||
                this._laterLimit && value.isAfter(this._laterLimit) ||
                this._isOffDay(date)) :
            null;
    },

    _build: function() {
        var rows = [];

        rows.push(this._buildShortWeekdays());
        rows = rows.concat(this._buildMonth(this._month));

        var calendar = BEMHTML.apply({
            block: 'calendar',
            elem: 'container',
            content: [
                this._buildTitle(this._month),
                {
                    elem: 'layout',
                    content: rows.map(function(row) {
                        return {
                            elem: 'row',
                            content: row
                        };
                    })
                }
            ]
        });
        this._popup.setContent(calendar);
    },

    /**
     * ReBuild Calendar.
     */
    reBuild: function() {
        this._build();
    },

    _calcWeeks: function(month) {
        var weekDay,
            weeks = [],
            countDays = 7,
            lastDay = 6,
            week = new Array(countDays);

        for (var dateIterator = moment(month).set('hour', 1);
            dateIterator.isSame(month, 'month');
            dateIterator = dateIterator.date(dateIterator.date() + 1)) {

            weekDay = dateIterator.day(); // Получаем 0 - пн, 1 - вт, и т.д.

            week[weekDay] = dateIterator.format();

            if (weekDay === lastDay) {
                weeks.push(week);
                week = new Array(countDays);
            }
        }

        if (weekDay !== lastDay) {
            weeks.push(week);
        }

        return weeks;
    },

    _buildMonth: function(month) {
        var rows = [];

        this._calcWeeks(month).forEach(function(week) {

            var row = [],
                _this = this;
            $.each(week, function(i, day) {

                var off = !_this._isValidDate(day),
                    val = _this.getVal(),
                    weekend = i > 4,
                    dayElem = {
                        elem: 'day',
                        content: {
                            elem: 'inner',
                            content: day ? moment(day).date() : ''
                        },
                        attrs: {},
                        mods: {}
                    };

                if (day && !off) {
                    dayElem.attrs['data-day'] = _this._formatDate(day);
                }

                if (off || weekend) {
                    dayElem.mods.type = weekend ? (off ? 'weekend-off' : 'weekend') : 'off';
                }

                if (day && val && moment(day).isSame(val, 'day')) {
                    dayElem.mods.state = 'current';
                }

                row.push(dayElem);
            });

            rows.push(row);
        }, this);

        return rows;
    },

    _buildShortWeekdays: function() {
        var row = [];

        this.params.weekdays.forEach(function(name, i) {
            var dayname = {
                elem: 'dayname',
                content: name
            };

            if (i > 4) {
                dayname.mods = { type: 'weekend' };
            }

            row.push(dayname);
        });

        return row;
    },

    _buildTitle: function(month) {
        var prevMonth = !this._earlierLimit || moment(month).isAfter(this._earlierLimit, 'month'),
            nextMonth = !this._laterLimit || moment(this._laterLimit).isAfter(month, 'month');

        return {
            elem: 'title',
            content: [
                {
                    elem: 'arrow',
                    mods: {
                        direction: 'left',
                        disabled: !prevMonth
                    }
                },
                {
                    elem: 'arrow',
                    mods: {
                        direction: 'right',
                        disabled: !nextMonth
                    }
                },
                {
                    elem: 'name',
                    content: this.params.months[moment(month).month()] +
                        ' ' + moment(month).year()
                }
            ]
        };
    },

    _changeMonthOnPointerClick: function(e) {
        var elem = $(e.currentTarget);
        if (!this.hasMod(elem, 'disabled')) {
            this.switchMonth(this.hasMod(elem, 'direction', 'left') ? -1 : 1);
        }
    },

    _changeDayOnPointerClick: function(e) {
        var date = $(e.currentTarget).data('day');
        if (date) {
            this.setVal(date);
            this.hide();

            var val = this.getVal();

            this.emit('change', {
                value: val,
                formated: this.getFormatedDate(),
                readableFormat: this.getReadableDate()
            });
        }
    }
},  /** @lends calendar */ {
    live: function() {
        this.liveBindTo('arrow', 'pointerclick', this.prototype._changeMonthOnPointerClick);

        this.liveBindTo('day', 'pointerclick', this.prototype._changeDayOnPointerClick);

        return false;
    }
}));

});
