import { Protein } from 'protein-kit';

export default class UI extends Protein {
    watch() {
        return './common.blocks/**';
    }

    wrapper() {
        return function (component, json) {
            let menu = component.getTypesKeys().map((modName, i) => {
                return {
                    block: 'menu-item',
                    mods: { type: 'link', view: 'pseudo' },
                    url: '#' + modName,
                    content: modName
                };
            });

            return {
                block: 'app',
                mix: { block: 'guide' },
                content: [
                    {
                        elem: 'title',
                        content: { block: 'heading', content: component.name }
                    },
                    {
                        elem: 'menu',
                        content: {
                            block: 'menu',
                            mods: { theme: 'alfa-on-white', size: 'm', view: 'horizontal' },
                            content: menu
                        }
                    },
                    { elem: 'content', content: json }
                ]
            };
        };
    }

    // render() {
    //     return require('protein-kit/lib/modules/protein-bemhtml');
    // }

    default() {
        return {
            types: { size: 'm', theme: ['alfa-on-white', 'alfa-on-color'] }
        };
    }
}
