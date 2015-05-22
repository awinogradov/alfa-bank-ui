({
    block: 'page',
    title: 'nyc-public: social-links',
    mods: { theme: 'alfa', bkg: 'color' },
    head: [
        { elem: 'css', url: '_simple.css' },
        { elem: 'js', url: '_simple.js' }
    ],
    content: [
        {
            block: 'social-links',
            mods: { theme: 'alfa', bkg: 'color', size: 's' },
            links: [
                { network: 'vk', url: 'https://vk.com/alfabank' },
                { network: 'facebook', url: 'https://facebook.com/alfabank' },
                { network: 'twitter', url: 'https://twitter.com/alfabank' }
            ],
            content: [
                {
                    block: 'link',
                    mods: { theme: 'alfa', bkg: 'color', pseudo: true },
                    url: '#',
                    content: 'Мы в соцмедиа'
                }
            ]
        }
    ]
})
