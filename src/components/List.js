import React, {Component } from "react";
import Image from './image'

class List extends Component  {
  render() {
    return(
      <ol>
      <Image/>
      <li>Nasi Padang</li>
      <li>Nasi Groeng</li>
      <li>Soto ayam</li>
      </ol>

    );
  }
}

export default List;
