import React from 'react'
import './App.css';
import {Provider} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import Footer from './components/footer/Footer';
import Landing from './components/home/Landing';
import Navbar from './components/navbar/Navbar';
import store from './redux/store';
import { Movie } from './components/home/Movie';


function App() {
  return (
    <Provider store={store}>
        <Router>
        <div className="app">
          <Navbar />
          <Route path="/" exact component={Landing} />
          <Route path="/movie/:id" exact component={Movie} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
