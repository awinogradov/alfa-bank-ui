var themeSwitcher = 'alfa-on-color';

var fs = require('fs');
var path = require('path');
var iconsPath = path.resolve(__dirname, '../../common.blocks/icon/');

function getIcons(modName) {
    var files = fs.readdirSync(path.resolve(iconsPath, '_' + modName));
    return files.filter(function(name) {
        return /\.svg/.test(name);
    });
}

function getModVals(modName) {
    var modVals = [];
    getIcons(modName).forEach(function(name) {
        var RE = new RegExp(modName + '_([a-z0-9]+)');
        return name.replace(RE, function(_, val) {
            modVals.push(val);
        });
    });
    return getUniq(modVals);
}

function getUniq(arr) {
   var u = {}, a = [];
   for (var i = 0, l = arr.length; i < l; ++i){
      if (u.hasOwnProperty(arr[i])) {
         continue;
      }
      a.push(arr[i]);
      u[arr[i]] = 1;
   }
   return a;
}

function buildSection(name, opt) {
    opt = opt || {};
    var sizes = opt.sizes || ['s', 'm', 'l', 'xl'];
    var themes = opt.themes || [themeSwitcher];

    var values = opt.modVals || getModVals(name);

    return themes.map(function(themeName) {
        return [
            {
                block: 'heading',
                mods: { theme: themeSwitcher, size: 'l' },
                content: name + ' ' + (opt.themes ? themeName : '')
            },
            values.map(function(modVal) {
                return [
                    {
                        block: 'heading',
                        mods: { theme: themeSwitcher, size: 's' },
                        content: modVal
                    },
                    sizes.map(function(size) {

                        var mods = {
                            theme: themeName,
                            size: size,
                        };

                        mods[name] = modVal;

                        var icon = {
                            block: 'icon',
                            mods: mods
                        };

                        return [
                            icon,
                            {
                                block: 'button',
                                mods: { theme: themeSwitcher, size: size },
                                attrs: { style: 'margin: 0 10px;' },
                                text: 'Button',
                                icon: icon
                            },
                            {
                                block: 'link',
                                mods: { theme: themeSwitcher, size: size },
                                url: '#' + name + modVal,
                                text: 'Link',
                                icon: icon
                            },
                            { tag: 'br' },
                            { tag: 'br' },
                        ];
                    }),
                ];
            }),
            { tag: 'hr' },
            { tag: 'br' },
            { tag: 'br' }
        ];

    });
}

var content = [
    buildSection('currency'),
    buildSection('format'),
    buildSection('tool'),
    buildSection('network', { sizes: ['s', 'm'] }),
    buildSection('card', { themes: [themeSwitcher, 'alfa-on-colored'] }),
    buildSection('bank', { themes: [themeSwitcher, 'alfa-on-colored'] }),
    buildSection('action'),
    buildSection('action', { themes: ['alfa-on-colored'], modVals: ['error', 'ok'] }),
    buildSection('user'),
];

module.exports = {
    block: 'page',
    title: 'Icon Block',
    mods: { theme: themeSwitcher },
    head: [{ elem: 'css', url: 'icon.min.css' }],
    scripts: [{ elem: 'js', url: 'icon.min.js' }],
    content: [
        {
            elem: 'inner',
            content: [
                {
                    elem: 'header',
                    content: [
                        {
                            block: 'header',
                            mods: { theme: themeSwitcher },
                            menu: {
                                block: 'menu',
                                mods: {
                                    theme: themeSwitcher,
                                    size: 'm',
                                    view: 'horizontal'
                                },
                                content: [
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
                                        title: 'Интернет-банк',
                                        url: '#',
                                        items: [
                                            {
                                                title: 'Интернет-банк',
                                                url: '#'
                                            },
                                            {
                                                title: 'Банкоматы',
                                                url: '#'
                                            },
                                            {
                                                title: 'Интернет-банк Интернет-банк Интернет-банк',
                                                url: '#'
                                            },
                                            {
                                                title: 'Банкоматы',
                                                url: '#'
                                            },
                                            {
                                                title: 'Интернет-банк',
                                                url: '#'
                                            },
                                            {
                                                title: 'Банкоматы',
                                                url: '#'
                                            }
                                        ]
                                    }
                                ].map(function(item) {
                                    if (item.items){
                                        return {
                                            block: 'menu-item',
                                            mods: { type: 'dropdown' },
                                            content: item.title,
                                            popup: [
                                                {
                                                    block: 'menu',
                                                    mix: { elem: 'additional' },
                                                    content: item.items.map(function(item) {
                                                        return {
                                                            block: 'menu-item',
                                                            mods: { type: 'link', theme: themeSwitcher },
                                                            mix: { elem: 'additional' },
                                                            url: item.url,
                                                            content: item.title
                                                        };
                                                    })
                                                }
                                            ]
                                        };
                                    }
                                    return {
                                        block: 'menu-item',
                                        mods: { type: 'link', theme: themeSwitcher },
                                        url: item.url,
                                        content: item.title
                                    };
                                })
                            }
                        }
                    ]
                },
                {
                    elem: 'content',
                    content: [
                        {
                            block: 'app',
                            mix: { block: 'service-name' },
                            content: [
                                {
                                    elem: 'title',
                                    content: {
                                        block: 'heading',
                                        mods: { theme: themeSwitcher, size: 'xl' },
                                        content: 'Блок Icon'
                                    }
                                },
                                {
                                    elem: 'content',
                                    content: content
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elem: 'footer',
            content: [
                {
                    block: 'footer',
                    mods: { theme: themeSwitcher },
                    menu: {
                        block: 'menu',
                        mods: {
                            theme: themeSwitcher,
                            size: 'm',
                            view: 'horizontal'
                        },
                        content: [
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
                            }
                        ].map(function(item) {
                            return {
                                block: 'menu-item',
                                mods: { type: 'link', theme: themeSwitcher },
                                url: item.url,
                                content: item.title
                            };
                        })
                    }
                }
            ]
        }
    ]
};
