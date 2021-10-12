import store from '../database/cardsstore';
import { Component } from 'react';
class footer extends Component {
    componentDidMount(){
        store.addListener(() => this.setState({}));
    }
    render() {
        return <h4>All Rights Reserved (2021) {`${store.cards.length} cards in store!`}</h4>
    }
}
export default footer;