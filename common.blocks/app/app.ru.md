# App

Блок реализует базовую обвзяку приложения.
 
``` js
{
    block : 'app',
    mods : { theme : 'alfa', bkg : 'color' },
    mix : { block : 'service-name' },
    content : [
        {
            elem : 'title',
            content : 'Заголовок'
        },
        {
            elem : 'menu',
            content : [
                {
                    block : 'menu-item',
                    mods : {
                        type : 'link'
                    },
                    url : '#',
                    content : 'Раз'
                },
                {
                    block : 'menu-item',
                    mods : {
                        type : 'link'
                    },
                    url : '#',
                    content : 'Два'
                }
            ]
        },
        {
            elem : 'content',
            content : 'Какой-то блок'
        }
    ]
}
```
 
 
## Элементы блока

### __title

Заголовок приожения

### __menu

Реализует меню из входного массива объектов.

### __content

Содержит рабочую область приложения
