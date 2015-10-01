import { Component } from 'protein-kit';

export default class List extends Component {
    types() {
        return {
            type: ['ordered']
        };
    }

    default() {
        return {
            data: {
                items: [
                    'Тексты и переводы песен № 0 - 1400',
                    'Тексты и переводы песен № 1400 - 2800',
                    'Тексты и переводы песен № 2800 - 4200',
                    'Тексты и переводы песен № 4200 - 5600',
                    'Тексты и переводы песен № 5600 - 7000',
                    'Тексты и переводы песен № 7000 - 8400',
                    [
                        'ordered item 4',
                        {
                            block: 'list',
                            mods: { type: 'ordered' },
                            items: ['nested and ordered item 1', 'nested and ordered item 2']
                        }
                    ]
                ]
            }
        };
    }
}
