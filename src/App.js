import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
import Login from './components/login'
import React, { Component, Components } from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter, Link, Switch, Route }  from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './database/cardstore-redux';

class App extends Component {
  state = { loggedIn :false }
  
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
        <div className="App">
          <Header></Header>
          <Switch>
            {/* <Route path="/login" component={Login} subtitle="use email"></Route> */}
            <Route path="/login" render={(props) => <Login subtitle="hint: use email" {...props} />}></Route>
            <Route path="/" component={Content}></Route>
          </Switch>
          <Footer></Footer>
        </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;















