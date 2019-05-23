import React from 'react';

const Footer = (props) =>
{
  //var name = "";
  return(
    <div>
    <h4>Footer Halaman {props.name} {props.Tagline}</h4>
    <p>@{props.tahun}</p>
    </div>
  );
};

// function Footer() {
//   return(
//       <div>
//       <h4>Footer Ha;laman</h4>
//       <p>@2019</p>
//       </div>
//     );
// }
  export default Footer;
