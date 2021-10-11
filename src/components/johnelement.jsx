import { Component } from 'react'
import './johnelement.css'

class MyComponent extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.john.changeTitle("I am changing you");
    }

    render() {
        return (<div>
            <john-element ref={el => this.john = el}></john-element>
            <button onClick={this.handleClick}>Change the title</button>
        </div>)
    }
}

export default MyComponent