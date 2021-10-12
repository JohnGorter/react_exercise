import { Component } from 'react'
import { connect } from 'react-redux'
import { store, storeActions } from '../database/cardstore-redux'

let Filter = ({setFilter}) => {
    return (<div>
        <form onSubmit={(e) =>  {
            e.preventDefault();
            setFilter(e.target.filter.value.toLowerCase())
        }}>
        { "filter on: "} <input type="text" name="filter"/>
        </form>
    </div>
    )
}


export default connect((state) => ({}), (dispatch) => ({
    setFilter: (filter) => dispatch(storeActions.setFilter(filter))
}))(Filter);