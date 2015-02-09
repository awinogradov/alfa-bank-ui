# Input

Доопределение блока `input` из bem-components.

## Модификаторы блока

### _type

- инпут выглядит как ссылка и трансформируется в редактируемое поле только в фокусе, в качестве ссылки используется
блок `link_pseudo`.

``` bemjson
{
    block : 'input',
    mods : { type  : 'link' }
}
```

### _autocomplete

- к полю ввода добавляется выпадающий список, из которого можно выбрать значение, элементы списка задаются дополнительным полем `options` так же, как в блоке `select`.

```bemjson
{
    block : 'input',
    mods : { autocomplete : true },
    options : [
        { val : 'MSC', content : 'Moscow' },
        { val : 'NYC', content : 'New York' }
    ]
}
