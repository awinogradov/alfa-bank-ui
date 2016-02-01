# User

User with settings and name. Based on `link`.

## Special mods

Options for BEMJSON:

<table>
    <tr>
        <th>Option</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>Link</td>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>[Required] User name or text, ex. `logout`</td>
    </tr>1
    <tr>
        <td>icon</td>
        <td>
            <code>Object</code>
        </td>
        <td>Block `icon`. `icon` will mix with `user__icon`</td>
    </tr>
</table>

## Usage

``` js
{
    block: 'user',
    mods: { theme: 'alfa-on-color', size: 'm' },
    url: '/logout',
    text: 'User Name',
    icon: {
        block: 'icon',
        mods: {
            theme: 'alfa-on-color',
            size: 's',
            user: 'out'
        }
    }
}
```
