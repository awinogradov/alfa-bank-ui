var protein = require('protein-kit');

protein.wrap(function (protein, content) {
    return {
        block: 'page',
        title: protein.component.name,
        head: [{ elem: 'css', url: protein.component.name + '.min.css' }],
        scripts: [{ elem: 'js', url: protein.component.name + '.min.js' }],
        content: [
            {
                block: 'app',
                mix: { block: 'guide' },
                content: [
                    {
                        elem: 'title',
                        content: [
                            { block: 'heading', content: protein.component.name },
                        ]
                    },
                    {
                        elem: 'menu',
                        content: [
                            {
                                block: 'menu',
                                mods: { theme: 'alfa-on-white', size: 'm', view: 'horizontal' },
                                content: (function () {
                                    var modsArray = Object.keys(protein.component.mods);
                                    modsArray.unshift('default');
                                    return modsArray.map(function (modName, i) {
                                        return {
                                            block: 'menu-item',
                                            mods: { type: 'link', view: 'pseudo' },
                                            url: '#' + modsArray[i],
                                            content: modName
                                        };
                                    });
                                })()
                            }
                        ]
                    },
                    {
                        elem: 'content',
                        content: content
                    }
                ]
            }
        ]
    };
});

protein.make();
