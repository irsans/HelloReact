import React, { Component } from 'react';
import Header from './Header'
import Footer from './footer'
import List from './List'
//import Image rom './Image'
//
// const Footer = () => {
//   return (
//     <div>
//     <h4>Halaman Footer</h4>
//     <p>@2019</p>
//     </div>
//   );
//};

class App extends Component {
  render() {
    return (
      <div >
        <Header/>
      <List/>
        <Footer/>
      </div>
    );


  }
}

export default App;
