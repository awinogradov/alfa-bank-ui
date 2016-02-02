# Calendar

## Modes

- `earlierLimit` end of range, all dates after it is `disabled`
- `laterLimit` start of range, all dates before is `disabled`
- `weekdays` array with week days names. Default is `['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']`.
- `months` array with months names. Default is `['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']`.
- `offDays` disabled dates. Use formats: `DD.MM.YYYY`, `DD-MM-YYYY`, `Date`.

## Bemjson example
```
{
    block: 'calendar',
    mods: {
        theme: 'alfa-on-color'
    },
    earlierLimit: '20.03.2015',
    laterLimit: '20.06.2015',
    weekdays: ['ПН', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    offDays: ['21.05.2015', '22-05-2015', '2015.05.23', '2015-05-24', '2015-05-25'],
    val: '02.02.2106'
}
