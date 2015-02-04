# message

Блок `message` используется для динамического вывода сообщений.

```bemjson
{
    block : 'message',
    content : 'message'
}
```

## Модификаторы блока

### Типы `_type`

Блок представлен следующими типами:

* текст (`message_type_text`)

```bemjson
{
    block : 'message',
    mods : { type : 'text' },
    content : 'Text'
}
```

* попап (`message_type_popup`)

```bemjson
{
    block : 'message',
    mods : { type : 'popup' },
    content : 'Popup'
}
```

### _error

`true` для сообщений об ошибках.

```bemjson
{
    block : 'message',
    mods : { error : true, type : 'popup' }
}
```

