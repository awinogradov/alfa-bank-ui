({
    block : 'page',
    title : 'Datepicker',
    styles : [
        { elem : 'css', url : 'calendar.min.css' },
        '<!--[if IE]>',
            { elem : 'css', url : 'calendar.min.ie.css' },
        '<![endif]-->',
        '<!--[if IE 8]>',
            { elem : 'css', url : 'calendar.min.ie8.css' },
        '<![endif]-->',
        '<!--[if IE 9]>',
            { elem : 'css', url : 'calendar.min.ie9.css' },
        '<![endif]-->'
    ],
    scripts : [
        { elem : 'js', url : 'calendar.min.js' }
    ],
    content : [
        {
            attrs : {
                style : 'padding: 50px; width: 150px'
            },
            content : [{
                block : 'input',
                mods : {
                    theme : 'alfa',
                    size : 'm',
                    bkg : 'white',
                    'has-addon' : true,
                    'has-calendar': true
                },
                weekdays : ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                months : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
            }]
        },
        {
            attrs : {
                style : 'padding: 50px; background: blue; width: 150px'
            },
            content: [{
                block : 'input',
                mods : {
                    theme : 'alfa',
                    size : 'm',
                    bkg : 'color',
                    'has-addon' : true,
                    'has-calendar' : true
                },
                weekdays : ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                months : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
            }]
        }
    ]
});
