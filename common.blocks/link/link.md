# Link

Based on [link from bem-components](https://github.com/bem/bem-components/blob/v2/common.blocks/link/link.en.md).

## Link with custom content

```bemjson
{
    block : 'link',
    content : 'something'
}
```

## Default usage

### `text` add wrapper by elem `text` for decoration

```bemjson
{
    block : 'link',
    text : 'link value'
}
```

### `icon` add wrapper by elem `icon` for decoration

```bemjson
{
    block : 'link',
    icon: { block: 'icon' },
    text : 'link value'
}
```
