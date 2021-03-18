import React from 'react'
import './App.css';
import {Provider} from 'react-redux'

import Footer from './components/footer/Footer';
import Landing from './components/home/Landing';
import Navbar from './components/navbar/Navbar';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <Landing />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
