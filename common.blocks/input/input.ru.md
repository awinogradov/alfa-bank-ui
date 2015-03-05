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

- маскирует значение в инпуте

``` bemjson
{
    block : 'input',
    mods : { 'has-mask'  : true },
    js : {
        mask : '00/00'
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
