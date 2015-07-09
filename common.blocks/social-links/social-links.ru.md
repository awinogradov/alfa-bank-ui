# Блок social-links

Блок со списком ссылок на социальные сети.

Пример использования:

```bemjson
{
    block : 'social-links',
    links : [
        { network : 'twitter', url : 'http://twitter.com/...' },
        { network : 'facebook', url : 'http://facebook.com/...' }
    ]
}
```

## Модификаторы блока

### _theme

- Тема Альфа-Банк (alfa)
```bemjson
{
    block : 'social-links',
    mods : { theme : 'alfa-on-color' },
    links : []
}
```

### _size

Стандартный модификатор размера: `s`, `m`, `l`, `xl`.


- для белого фона (white)

```bemjson
{
    block : 'social-links',
    mods : { theme : 'alfa-on-white' },
    links : []
}
```

- для цветного фона (color)

```bemjson
{
    block : 'social-links',
    mods : { theme : 'alfa-on-color' },
    links : []
}
```
