import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
import Login from './components/login'
import React, { Component, Components } from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter, Link, Switch, Route }  from 'react-router-dom'

class App extends Component {
  state = { loggedIn :false }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            {/* <Route path="/login" component={Login} subtitle="use email"></Route> */}
            <Route path="/login" render={(props) => <Login subtitle="hint: use email" {...props} />}></Route>
            <Route path="/" component={Content}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;















