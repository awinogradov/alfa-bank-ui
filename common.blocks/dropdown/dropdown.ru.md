# Dropdown

Доопределение блока `dropdown` из `bem-components`.

## Модификаторы блока

### _mode

Обязательный модификатор

- открытие по клику (click)

``` js
{
    block : 'dropdown',
    mods : { mode  : 'click' }
}
```

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
