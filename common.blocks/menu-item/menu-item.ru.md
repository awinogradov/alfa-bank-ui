# menu-item

## Модификаторы блока

### Типы `_type`
Модификатор `type` в значени `dropdown` позволяет создавать пункт меню, реализованны блоком [`dropdown`](../dropdown/dropdown.ru.md). В поле `popup` при этом помещается блок `popup`.

```bemjson
{
    block: 'menu-item',
    mods: { type: 'dropdown'},
    val: 4,
    content: 'Солнце',
    popup: [
        {
            block: 'menu',
            content: 'content'
        }
    ]
}
```
