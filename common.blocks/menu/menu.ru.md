#menu

## Модификаторы блока

### Темы `_theme`

Блоку добавлена тема:
    * alfa

Наглядно показано на примере ниже:

```bemjson
 {
    block : 'menu',
    mods : { theme : 'alfa'}
 }
```
### Фон `_bkg`

Доступны два типа для белого и цветного фона:
    * white
    * color
    
Примеры: 

```bemjson
{
    block : 'menu',
    mods : { bkg : 'color', theme : 'alfa'}
}
```

```bemjson
{
    block : 'menu',
    mods : { bkg : 'color', theme : 'alfa'}
}
```

### Размер `_size`

- маленький (s)

```bemjson
{
    block : 'logo',
    mods : { size : 's' }
}
```

- средний (m)

```bemjson
{
    block : 'logo',
    mods : { size : 'm' }
}
```

- большой (l)

```bemjson
{
    block : 'logo',
    mods : { size : 'l' }
}
```

- самый большой (xl)

```bemjson
{
    block : 'logo',
    mods : { size : 'xl' }
}
```
