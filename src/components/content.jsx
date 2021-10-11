import Card from './card'
import Swimlane from './swimlane'
import Header from './header'
import { Component } from 'react';
import Filter from './filter'
import './content.css'
import { withRouter } from 'react-router-dom';

class content extends Component {
    constructor() {
        super();
        this.state = {cards:[]}
        this.addCard = this.addCard.bind(this); 
    }

    filter(filterstring) {
        this.setState({filter:filterstring});
    }

    async componentDidMount() {
        if (!this.props.history.location.state || !this.props.history.location.state.auth) this.props.history.push('/login');
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

    doFilter(c, lane){
        return c.lane == lane && (!this.state.filter || c.title.toLowerCase().indexOf(this.state.filter) > -1)
    }

    render() { 
        return (
            <div>
        <div id="main">
            <Swimlane title="Backlog" 
                moveCard={(title, pos) => this.moveCard(title, 1, pos)}
                addCard={(c) => this.addCard(c, 1)}>
                { this.state.cards.filter(c => this.doFilter(c,1)).map(c => <Card key={c.title} title={c.title} />)}
            </Swimlane>
            <Swimlane title="In Progress" 
                moveCard={(title, pos) => this.moveCard(title, 2, pos)}
                addCard={(c) => this.addCard(c, 2)}>
                 { this.state.cards.filter(c => this.doFilter(c,2)).map(c => <Card key={c.title} title={c.title} />)}
            </Swimlane>
            <Swimlane title="Done" 
                moveCard={(title, pos) => this.moveCard(title, 3, pos)}
                addCard={(c) => this.addCard(c, 3)}>
                { this.state.cards.filter(c => this.doFilter(c,3)).map(c => <Card key={c.title} title={c.title} />)}
            </Swimlane> 
        </div>
        <div>Search: <Filter filter={(e) => this.filter(e)} /></div>
        </div>
        )
    }
}
export default withRouter(content);