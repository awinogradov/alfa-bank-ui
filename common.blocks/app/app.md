# App

Base service layout.

``` js
{
    block : 'app',
    mix : { block : 'service-name' },
    content : [
        {
            elem : 'title',
            content : {
                block : 'heading',
                mods : { theme : 'alfa-on-color' },
                content : 'Title of service'
            }
        },
        {
            elem : 'menu',
            content : [
                {
                    block : 'menu',
                    mods : { theme : 'alfa-on-color' },
                    content : [
                        {
                            block : 'menu-item',
                            mods : {
                                theme : 'alfa-on-color',
                                type : 'link'
                            },
                            url : '#',
                            content : 'One'
                        },
                        {
                            block : 'menu-item',
                            mods : {
                                theme : 'alfa-on-color',
                                type : 'link'
                            },
                            url : '#',
                            content : 'Two'
                        }
                    ]
                }
            ]
        },
        {
            elem : 'content',
            content : 'Service controls'
        }
    ]
}
```


## Block elements

### __title

Service title

### __menu

Service main menu

### __content

Service workspace
