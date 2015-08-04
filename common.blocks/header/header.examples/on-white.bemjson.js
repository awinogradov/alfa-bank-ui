({
    block: 'page',
    title: 'Header on White',
    mods: { theme: 'alfa-on-white' },
    head: [{ elem: 'css', url: 'on-white.min.css' }],
    scripts: [{ elem: 'js', url: 'on-white.min.js' }],
    content: [
        {
            block: 'header',
            mods: { theme: 'alfa-on-white' },
            menu: [
                {
                    title: 'Частным лицам',
                    url: '#'
                },
                {
                    title: 'Бизнесу',
                    url: '#'
                },
                {
                    title: 'Отделения',
                    url: '#'
                },
                {
                    title: 'Банкоматы',
                    url: '#'
                },
                {
                    title: 'Интернет-банк',
                    url: '#'
                }
            ],
            customer: 'customer',
            support: 'support'
        },
        [1,2,3,4,5,6,7,8,9,10].map(function(line) {
            return {
                attrs: { style: 'height:200px; border-bottom: 6px solid;' },
                content: line
            };
        })
    ]
});
