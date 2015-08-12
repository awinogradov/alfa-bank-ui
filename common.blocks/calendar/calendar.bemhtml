block('calendar')(

    js()(function() {
        var ctx = this.ctx;

        return this.extend({
            earlierLimit: ctx.earlierLimit,
            laterLimit: ctx.laterLimit,
            weekdays: ctx.weekdays || ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
            months: ctx.months || [
                'Январь',
                'Февраль',
                'Март',
                'Апрель',
                'Май',
                'Июнь',
                'Июль',
                'Август',
                'Сентябрь',
                'Октябрь',
                'Ноябрь',
                'Декабрь'
            ],
            offDays: ctx.offDays,
            val: ctx.val
        }, this.ctx.js);
    }),

    elem('layout').tag()('table'),
    elem('row').tag()('tr'),
    elem('day').tag()('td'),
    elem('dayname').tag()('th')
);
