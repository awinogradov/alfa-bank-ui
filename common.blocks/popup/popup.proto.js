import { Component } from 'protein-kit';

export default class Popup extends Component {
    types() {
        return {
            size: ['s', 'm', 'l', 'xl']
        };
    }

    default() {
        return {
            data: {
                content: 'Popup content <br> with two strings',
                attrs: { style: 'min-height: 50px;' }
            }
        };
    }
}
