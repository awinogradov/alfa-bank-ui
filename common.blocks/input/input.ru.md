# Input

Доопределение блока `input` из bem-components.

## Модификаторы блока

### _mode

- инпут выглядит как ссылка и трансформируется в редактируемое поле только в фокусе, в качестве ссылки используется
блок `link_pseudo`.

``` bemjson
{
    block : 'input',
    mods : { mode  : 'link' }
}
```

- поле принимает вид обычного output.

``` bemjson
{
    block : 'input',
    mods : { mode  : 'result' }
}
```

### _type

- поле для ввода email

``` bemjson
{
    block : 'input',
    mods : { type  : 'email' }
}
```

- поле для ввода номера телефона

``` bemjson
{
    block : 'input',
    mods : { type  : 'tel' }
}
```

- скрытое поле

``` bemjson
{
    block : 'input',
    mods : { type  : 'hidden' }
}
```

### _has-addon

- в конец поля инпута добавляется блок с произвольным дополнением.

``` bemjson
{
    block : 'input',
    mods : { 'has-addon'  : true },
    addon : '₽'
}
```

### _has-mask

- Маскирует значение в инпуте. Формат маски как в плагине [formatter](https://github.com/firstopinion/formatter.js).

``` bemjson
{
    block : 'input',
    mods : { 'has-mask'  : true },
    js : {
        mask : '{{99}}/{{99}}'
    }
}
```

### _has-autocomplete

- к полю ввода добавляется выпадающий список, из которого можно выбрать значение, элементы списка задаются дополнительным полем `options` так же, как в блоке `select`.

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

Элементы списка могут быть объединены в группы:

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

Элементы списка, также могут содержать поле data, содержимым которого может быть javascript объект. Этот объект передается в событие `select`.

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

Включает возможность фильтрации элементов autocomplete. Работает только с `has-autocomplete`. По умолчанию ищет введенную подстроку в содержимом каждого menu-item. Функцию фильтрации можно переопределить так:

```
    ...
    block.setFilter(function(item, val) {
        // item is a block
        return item.params.data.title.match(val);
    });
```

### _has-calendar

К полю ввода добавляется возможность выбора даты из календаря. 
Зависит от `_has-addon` и `_has-mask` для добавления иконки календаря и маски ввода соответственно.

- модификатор `_readable-date` используется только в js, только с `_has-calendar`, для того что бы инпуту без фокуса выставлялся формат `DD MMMM YYYY`.
- мода `earlierLimit` выстанавливает нижнюю границу ренжа дата после которой все даты `disabled`. Используется при необходимости.
- мода `laterLimit` выстанавливает верхнюю границу ренжа дата после которой все даты `disabled`. Используется при необходимости.
- мода `weekdays` массив с названиями дней недели. По умолчанию `['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']`.
- мода `months` массив с названиями месяцев. По умолчанию `['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']`.
- мода `offDays` массив дат которые нужно задизейблить. Принимает форматы `DD.MM.YYYY`, `DD-MM-YYYY`, `Date`.
- мода `directions` определяет расположение всплывающего окна относительно точки открытия.

```
{
    block : 'input',
    mods : {
        theme : 'alfa',
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
    directions : ['bottom-center']
}
```
