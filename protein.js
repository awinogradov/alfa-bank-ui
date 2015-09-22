var protein = require('protein-kit').protein;

protein.watch('./common.blocks/**');

protein.wrapper(function (component, json) {
    return {
        block: 'page',
        title: component.name,
        head: [{ elem: 'css', url: component.name + '.min.css' }],
        scripts: [{ elem: 'js', url: component.name + '.min.js' }],
        content: [
            {
                block: 'app',
                mix: { block: 'guide' },
                content: [
                    {
                        elem: 'title',
                        content: [
                            { block: 'heading', content: component.name },
                        ]
                    },
                    {
                        elem: 'menu',
                        content: [
                            {
                                block: 'menu',
                                mods: { theme: 'alfa-on-white', size: 'm', view: 'horizontal' },
                                content: (function () {
                                    return component.getTypesKeys().map(function (modName, i) {
                                        return {
                                            block: 'menu-item',
                                            mods: { type: 'link', view: 'pseudo' },
                                            url: '#' + modName,
                                            content: modName
                                        };
                                    });
                                })()
                            }
                        ]
                    },
                    {
                        elem: 'content',
                        content: json
                    }
                ]
            }
        ]
    };
});

protein.default({
    types: { size: 'm', theme: ['alfa-on-white', 'alfa-on-color'] },
});
