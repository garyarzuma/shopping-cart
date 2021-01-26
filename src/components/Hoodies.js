import React, { useEffect, useState } from "react";

const Hoodies = (props) => {
  return (
    <div>
      <img src={props.imgSrc} alt={props.name} className="hoodie-image"></img>
      <div className="hoodie-name">{props.name}</div>
      <div className="hoodie-price">${props.price}</div>
    </div>
  );
};

export default Hoodies;
