import { Component } from 'react'


let Filter = ({filter}) => {
    return (<div>
        <form onSubmit={(e) =>  {
            e.preventDefault();
            filter(e.target.filter.value.toLowerCase())
        }}>
        { "filter on: "} <input type="text" name="filter"/>
        </form>
    </div>
    )
}


export default Filter;