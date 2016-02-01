# menu-item

Based on [menu from bem-components](https://github.com/bem/bem-components/blob/v2/common.blocks/menu/menu.en.md).

## Block mods

### `_type`

`type` with value `dropdown` create `menu-item` with [`dropdown`](../dropdown/dropdown.ru.md). Option `popup` should contain block `popup`.

```bemjson
{
    block: 'menu-item',
    mods: { type: 'dropdown'},
    val: 4,
    content: 'Sun',
    popup: [
        {
            block: 'menu',
            content: 'content'
        }
    ]
}
```
