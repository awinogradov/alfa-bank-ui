import { Component } from 'protein-kit';

export default class Spin extends Component {
    types() {
        return {
            size: ['s', 'm', 'l', 'xl']
        };
    }

    default() {
        return {
            types: { visible: true }
        };
    }
}
