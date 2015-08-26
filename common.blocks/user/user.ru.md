# User

Реализует отображение ссылки пользователя с иконками. Может быть реализован в нескольких темах и зазмерах.
Блок основывается на ссылке.

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>Ссылка</td>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>[Обязательный] Имя юзера или текст на подобие `Войти`</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>Object</code>
        </td>
        <td>Блок с иконкой. На блок `icon` миксуется элемент `user__icon`</td>
    </tr>
</table>

## Пример

```
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
