# Dropdown

Доопределение блока `dropdown` из `bem-components`.

## Модификаторы блока

### _mode

Необязательный модификатор (по умолчанию - открытие по клику)

- открытие при наведении (hover)

``` js
{
    block : 'dropdown',
    mods : { mode  : 'hover' }
}
```

### _theme

- выпадашка ОАО «Альфа-Банк» (alfa)

``` js
{
    block : 'dropdown',
    mods : { mode  : 'hover', theme  : 'alfa' }
}
```

### _bkg

- для белого фона (white)

``` js
{
    block : 'logo',
    mods : { mode  : 'hover', theme  : 'alfa', bkg : 'white' }
}
```

- для цветного фона (color)

``` js
{
    block : 'logo',
    mods : { mode  : 'hover', theme  : 'alfa', bkg : 'color' }
}
```
