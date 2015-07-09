# Notification

Уведомление.

# Использование блока

``` js
{
    block : 'notification'
}
```

## Модификаторы блока

### _theme

- плашка (alfa)

``` js
{
    block : 'notification',
    mods : { theme : 'alfa-on-color' }
}
```

- для белого фона (white)

``` js
{
    block : 'notification',
    mods : { theme  : 'alfa-on-white' }
}
```

- для цветного фона (color)

``` js
{
    block : 'notification',
    mods : { theme  : 'alfa-on-color' }
}
```

### js-usage

метод push(status, message)

-показывает уведомление

параметр status может принимать значения:

-ok
-fail

параметр mrssage может принимать строку, содержащую сообщение
