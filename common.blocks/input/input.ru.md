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
