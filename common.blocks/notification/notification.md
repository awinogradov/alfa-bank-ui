# Notification

# Usage

``` js
{
    block : 'notification'
}
```

## Block mods

- light background (white)

``` js
{
    block : 'notification',
    mods : { theme  : 'alfa-on-white' }
}
```

- colorful background (color)

``` js
{
    block : 'notification',
    mods : { theme  : 'alfa-on-color' }
}
```

### js

`notify.push(status, message)` - show notification. Status can be `ok` and `error`.
Message is String.
