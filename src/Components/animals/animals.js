import React from "react";
import "./animals.css";

const animals = props => (
	
	<div onClick={() => props.changeCard(props.id)} className="animCard">
    <div className="img-container">
      <img
        alt={props.name}
        src={props.image}
      />
    </div>
  </div>

	)

export default animals