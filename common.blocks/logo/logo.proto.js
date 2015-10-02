import { Component } from 'protein-kit';

export default class Logo extends Component {
    types() {
        return {
            size: ['s', 'm', 'l', 'xl'],
            view: ['full']
        };
    }
}
