import Card from './card'
import Swimlane from './swimlane'
import Header from './header'
import { Component } from 'react';
import Filter from './filter'
import './content.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class content extends Component {

    async componentDidMount() {
        if (!this.props.history.location.state || !this.props.history.location.state.auth) this.props.history.push('/login');
    }

    doFilter(c, lane){
        return c.lane == lane && (!this.props.filter || c.title.toLowerCase().indexOf(this.props.filter) > -1)
    }

    render() { 
        return (
            <div>
        <div id="main">
            <Swimlane title="Backlog" lane="1">
                { this.props.cards.filter(c => this.doFilter(c,1)).map(c => <Card key={c.title} title={c.title} />)}
            </Swimlane>
            <Swimlane title="In Progress" lane="2">
                 { this.props.cards.filter(c => this.doFilter(c,2)).map(c => <Card key={c.title} title={c.title} />)}
            </Swimlane>
            <Swimlane title="Done" lane="3">
                { this.props.cards.filter(c => this.doFilter(c,3)).map(c => <Card key={c.title} title={c.title} />)}
            </Swimlane> 
        </div>
        <div>Search: <Filter/></div>
        </div>
        )
    }
}


export default connect(state => ({
        cards:state.cards,
        filter:state.filter
}))(withRouter(content));