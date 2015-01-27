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
    mods : { theme : 'alfa' },
    links : []
}
```

### _size

Стандартный модификатор размера: `s`, `m`, `l`, `xl`.

### _bkg

- для белого фона (white)

```bemjson
{
    block : 'social-links',
    mods : { theme : 'alfa', bkg : 'white' },
    links : []
}
```

- для цветного фона (color)

```bemjson
{
    block : 'social-links',
    mods : { theme : 'alfa', bkg : 'color' },
    links : []
}
```
