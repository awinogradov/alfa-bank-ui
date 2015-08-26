# Support

Блок обертка для отображения контактных данных в шапке сайта

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>city</td>
        <td>
            <code>String</code>
        </td>
        <td>Названеие города</td>
    </tr>
    <tr>
        <td>phone</td>
        <td>
            <code>String</code>
        </td>
        <td>Телефон</td>
    </tr>
</table>

## Пример

```
{
    block: 'support',
    mods: { theme: 'alfa-on-color', size: 'm' },
    city: 'Москва',
    phone: '+7 (777) 777-77-77'
}
```
