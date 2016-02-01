# Input

Based on [input from bem-components](https://github.com/bem/bem-components/blob/v2/common.blocks/input/input.en.md).


## Block mods

### _mode

- base on `link_pseudo` and transform to input on focus

``` bemjson
{
    block : 'input',
    mods : { mode  : 'link' }
}
```

### _type

- input for email

``` bemjson
{
    block : 'input',
    mods : { type  : 'email' }
}
```

- input for tel

``` bemjson
{
    block : 'input',
    mods : { type  : 'tel' }
}
```

- hidden input for special date in forms

``` bemjson
{
    block : 'input',
    mods : { type  : 'hidden' }
}
```

### _has-icon

- tech mode for styles of input with icon. This mod setup automatically when bemsjon has icon option.

``` bemjson
{
    block : 'input',
    icon : { block: 'icon' }
}
```

### _has-mask

- mask value [formatter](https://github.com/firstopinion/formatter.js).

``` bemjson
{
    block : 'input',
    mods : { 'has-mask' : true },
    js : {
        mask : '{{99}}/{{99}}'
    }
}
```

### _has-autocomplete

- input with dropdown with selectable values and filter

```bemjson
{
    block : 'input',
    mods : { 'has-autocomplete' : true },
    options : [
        { val : 'MSC', content : 'Moscow' },
        { val : 'NYC', content : 'New York' }
    ]
}
```

Grouped elements in dropdown:

```bemjson
{
    block : 'input',
    mods : { autocomplete : true },
    options : [
        {
            title : 'Russia',
            group : [
                { val : 'MSC', content : 'Moscow' },
                { val : 'SPB', content : 'Saint-Petersburg' }
            ]
        },
        {
            title : 'USA',
            group : [
                { val : 'NYC', content : 'New York' },
                { val : 'BST', content : 'Boston' }
            ]
        }
    ]
}
```

Elements can contain data with js object. Use this object in `select` event.

```bemjson
{
    block : 'input',
    mods : { autocomplete : true },
    options : [
        {
            title : 'Russia',
            group : [
                { val : 'MSC', data: { title : 'Moscow', code : 'MSC' }, content : 'Moscow' },
                { val : 'SPB', data: { title : 'Saint-Petersburg', code : 'SPB' }, content : 'Saint-Petersburg' }
            ]
        },
        {
            title : 'USA',
            group : [
                { val : 'NYC', data : { title : 'New York', code : 'NYC' }, content : 'New York' }
            ]
        }
    ]
}
```

### _has-filter

Autocomplete can be filtered. `has-autocomplete` is required.

```
    ...
    block.setFilter(function(item, val) {
        // item is a block
        return item.params.data.title.match(val);
    });
```

### _has-calendar

Input with calendar. Depend on `_has-mask`.

- `_readable-date` need for js, use it with `_has-calendar`, format input value `DD MMMM YYYY`
- `earlierLimit` end of range, all dates after it is `disabled`
- `laterLimit` start of range, all dates before is `disabled`
- `weekdays` array with week days names. Default is `['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']`.
- `months` array with months names. Default is `['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']`.
- `offDays` disabled dates. Use formats: `DD.MM.YYYY`, `DD-MM-YYYY`, `Date`.
- `directions` positions of calendar

```
{
    block : 'input',
    mods : {
        size : 'm',
        'has-calendar' : true,
        'readable-date' : true
    },
    earlierLimit : '20.03.2015',
    laterLimit : '20.06.2015',
    weekdays : ['ПН', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    months : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    offDays : ['21.05.2015', '22-05-2015', '2015.05.23', '2015-05-24', '2015-05-25'],
    directions : ['bottom-center']
}
```
