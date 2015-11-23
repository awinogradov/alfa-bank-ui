import { Component } from 'protein-kit';

export default class Calendar extends Component {
    default() {
        return {
            data: {
                earlierLimit: '12.10.2015',
                laterLimit: '20.11.2015',
                val: '22.10.2015'
            }
        };
    }
}
