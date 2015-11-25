import { Component } from 'protein-kit';

export default class Select extends Component {
    types() {
        return {
            size: ['s', 'm', 'l', 'xl'],
            mode: [
                { check: {
                    data: {
                        val: [2, 3],
                        options: [
                            { val: 1, text: 'Доклад' },
                            { val: 2, text: 'Мастер-класс', disabled: true },
                            { val: 3, text: 'Круглый стол' },
                            {
                                title: 'Group',
                                group: [
                                    { val: 4, text: 'Доклад' },
                                    { val: 5, text: 'Мастер-класс' },
                                    { val: 6, text: 'Круглый стол' }
                                ]
                            }
                        ]
                    }
                } },
                { radio: {
                    data: {
                        val: 3,
                        options: [
                            { val: 1, text: 'Доклад' },
                            { val: 2, text: 'Мастер-класс', disabled: true },
                            { val: 3, text: 'Круглый стол' },
                            {
                                title: 'Group',
                                group: [
                                    { val: 4, text: 'Доклад' },
                                    { val: 5, text: 'Мастер-класс' },
                                    { val: 6, text: 'Круглый стол' }
                                ]
                            }
                        ]
                    }
                } },
                { 'radio-check': {
                    data: {
                        val: 3,
                        options: [
                            { val: 1, text: 'Доклад' },
                            { val: 2, text: 'Мастер-класс', disabled: true },
                            { val: 3, text: 'Круглый стол' },
                            {
                                title: 'Group',
                                group: [
                                    { val: 4, text: 'Доклад' },
                                    { val: 5, text: 'Мастер-класс' },
                                    { val: 6, text: 'Круглый стол' }
                                ]
                            }
                        ]
                    }
                } }
            ],
            width: ['available']
        };
    }

    default() {
        return {
            states: ['hovered', 'focused-hard', 'opened', ['hovered', 'focused-hard'], 'invalid', 'disabled'],
            types: { mode: 'radio-check' },
            data: {
                text: 'This is sparta!',
                val: 3,
                options: [
                    { val: 1, text: 'Доклад' },
                    { val: 2, text: 'Мастер-класс', disabled: true },
                    { val: 3, text: 'Круглый стол' },
                    {
                        title: 'Group',
                        group: [
                            { val: 4, text: 'Доклад' },
                            { val: 5, text: 'Мастер-класс' },
                            { val: 6, text: 'Круглый стол' }
                        ]
                    }
                ],
                directions: ['bottom-left']
            }
        };
    }
}
