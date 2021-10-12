import './swimlane.css'
import { Component } from 'react'
import PropTypes from 'prop-types';
import Card from '../components/card'
import { connect } from 'react-redux'
import { store, storeActions } from '../database/cardstore-redux';

class swimlane extends Component {
    constructor(){
        super(); 
        this.state = { newcard:''}
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    handleChange({target, nativeEvent, ...rest}) {
        //if (parseInt(nativeEvent.data) > -1) 
       this.setState({newcard:target.value});
    }
    onClick(){
        this.props.addCard(this.state.newcard, this.props.lane);
        this.setState({newcard:''});
    }
    render() {
        return (
            <div className="swimlane">
                <div className="lanetitle">{this.props.title}</div>
                <div>
                    new card <input type="text" value={this.state.newcard} onChange={this.handleChange} />
                    <button onClick={this.onClick} >Add a new Card</button>
                </div>
                <div className="laneBody" onDragEnter={(e) => {
                    e.preventDefault();
                }}
                onDragOver={(e)=>{
                    e.preventDefault();
                }} onDrop={(e)=>{
                    e.preventDefault();
                    this.props.moveCard(e.dataTransfer.getData("card"), this.props.lane, {x: e.clientX, y: e.clientY})
                }}>
                {this.props.children}
                </div>
            </div>
        )
    }
}

swimlane.propTypes = {
    title: PropTypes.string.isRequired,
    addCard: PropTypes.func.isRequired,
    moveCard: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default connect((state) => ({ 
}), (dispatch) => ({
    addCard: (card, lane) => dispatch(storeActions.addCard(card, lane)),
    moveCard: (card, lane) => dispatch(storeActions.changeCard(card, lane)),
}))(swimlane);