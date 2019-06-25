import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/navbar';
import ShoppingList from './components/shoppingList';
import ItemModal from './components/itemModal';

import {Container} from 'reactstrap';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar></AppNavbar>
          <Container>
          <ItemModal></ItemModal>
          <ShoppingList></ShoppingList>
          </Container>
        </div>
      </Provider>
    );
  }

}

export default App;