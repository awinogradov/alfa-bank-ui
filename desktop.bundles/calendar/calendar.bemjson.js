({
    block : 'page',
    title : 'Datepicker',
    styles : [
        { elem : 'css', url : 'calendar.min.css' }
    ],
    scripts : [
        { elem : 'js', url : 'calendar.min.js' }
    ],
    content : [
        {
            attrs : {
                style : 'padding: 50px; width: 150px'
            },
            content : [
                {
                    block : 'input',
                    mods : {
                        theme : 'alfa-on-white',
                        size : 'm',
                        'has-addon' : true,
                        'has-calendar': true
                    }
                },
                'readable date',
                {
                    block : 'input',
                    mods : {
                        theme : 'alfa-on-white',
                        'readable-date': true,
                        size : 'm',
                        'has-addon' : true,
                        'has-calendar': true
                    }
                },
                {
                    block : 'input',
                    mods : {
                        theme : 'alfa-on-white',
                        size : 'm',
                        'has-addon' : true,
                        'has-calendar': true,
                        disabled : true
                    }
                }
            ]
        },
        {
            attrs : {
                style : 'padding: 50px; background: blue; width: 150px'
            },
            content: [
                {
                    block : 'input',
                    mods : {
                        theme : 'alfa-on-color',
                        size : 'm',
                        'has-addon' : true,
                        'has-calendar' : true
                    },
                    earlierLimit : '20.03.2015',
                    laterLimit : '20.06.2015',
                    weekdays : ['ПН', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                    months : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                    offDays : ['21.05.2015', '22-05-2015', '2015.05.23', '2015-05-24', '2015-05-25']
                },
                'readable date',
                {
                    block : 'input',
                    mods : {
                        theme : 'alfa-on-color',
                        size : 'm',
                        'has-addon' : true,
                        'has-calendar' : true,
                        'readable-date' : true
                    },
                    earlierLimit : '20.03.2015',
                    laterLimit : '20.06.2015',
                    weekdays : ['ПН', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                    months : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                    offDays : ['21.05.2015', '22-05-2015', '2015.05.23', '2015-05-24', '2015-05-25'],
                    directions : ['right-center']
                },
                {
                    block : 'input',
                    mods : {
                        theme : 'alfa-on-color',
                        size : 'm',
                        'has-addon' : true,
                        'has-calendar' : true,
                        disabled : true
                    },
                    earlierLimit : '20.03.2015',
                    laterLimit : '20.06.2015',
                    weekdays : ['ПН', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                    months : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                    offDays : ['21.05.2015', '22-05-2015', '2015.05.23', '2015-05-24', '2015-05-25']
                }
            ]
        }
    ]
});
