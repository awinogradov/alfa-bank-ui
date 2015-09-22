import { Component } from 'protein-kit';

export default class Textarea extends Component {
    types() {
        return {
            size: ['s', 'm', 'l', 'xl'],
            width: ['available']
        };
    }

    default() {
        return {
            states: ['hovered', 'focused', 'disabled'],
            data: { val: 'Textarea', placeholder: 'Placeholder' }
        };
    }
}
