import Card from './card'
import Swimlane from './swimlane'

import { Component } from 'react';

import './content.css'

class content extends Component {
    constructor() {
        super();
        this.state = {cards:[]}
        this.addCard = this.addCard.bind(this); 
    }

    async componentDidMount() {
        let response = await fetch('/data.json');
        let data = await response.json(); 
        this.setState({cards:data.map((d, i) => { return {title:d.title, lane:1, pos:i};})});
    }

    addCard(title, lane){
        this.setState({cards:[...this.state.cards, {title, lane, pos:this.state.cards.length}]})
    }
    moveCard(title, lane, pos) {
        let card = this.state.cards.find(c => c.title == title);
        if (card) card.lane = lane;
        // // sort the cards
        // let cards = this.state.cards;
        // let position =  Math.round((pos.y -140) / 70);
        // card.pos = position;
        // var newpos = position + 1;
        // for (let c of cards) {
        //     if (c != card && c.pos >= position) c.pos = newpos++;
        // }
        // cards.sort((a,c) => a.pos - c.pos);
        this.setState({cards:[...this.state.cards]});
    }

    render() { 
        return (
        <div id="main">
            <Swimlane title="Backlog" 
                moveCard={(title, pos) => this.moveCard(title, 1, pos)}
                addCard={(c) => this.addCard(c, 1)}>
                { this.state.cards.filter(c => c.lane == 1).map(c => <Card title={c.title} />)}
            </Swimlane>
            <Swimlane title="In Progress" 
                moveCard={(title, pos) => this.moveCard(title, 2, pos)}
                addCard={(c) => this.addCard(c, 2)}>
                 { this.state.cards.filter(c => c.lane == 2).map(c => <Card title={c.title} />)}
            </Swimlane>
            <Swimlane title="Done" 
                moveCard={(title, pos) => this.moveCard(title, 3, pos)}
                addCard={(c) => this.addCard(c, 3)}>
                { this.state.cards.filter(c => c.lane == 3).map(c => <Card title={c.title} />)}
            </Swimlane> 
        </div>
        )
    }
}
export default content;