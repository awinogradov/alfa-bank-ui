import { Component } from 'protein-kit';

export default class Heading extends Component {
    types() {
        return {
            size: ['s', 'm', 'l', 'xl']
        };
    }

    default() {
        return {
            data: { content: 'Очень длинный заголовок страницы <br>в одном из размеров.' }
        };
    }
}
