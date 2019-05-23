import React, { Component } from 'react';
import Header from './Header'
import Footer from './footer'
import List from './List'


class App extends Component {
  render() {
    return (
      <div >
        <Header/>
      <List/>
        <Footer name="Makanan Nusantara" tahun="2019" Tagline="Cita Rasa Indonesia"/>
      </div>
    );


  }
}

export default App;
