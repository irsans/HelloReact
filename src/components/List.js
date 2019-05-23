import React, {Component } from "react";
import Image from './image'

class List extends Component  {
  render() {
    return(
      <ol>
      <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" lebar="500"/>
      <li>Nasi Padang</li>
      <Image linkgambar="https://i0.wp.com/batas.id/wp-content/uploads/2019/04/nasipadang2.jpg?fit=1920%2C1080&ssl=1" lebar="400"/>
      <li>Sate</li>
      <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" lebar="300"/>
      <li>Soto ayam</li>
      <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" lebar="200"/>
      </ol>

    );
  }
}

export default List;
