import React from "react";
import "./animals.css";

const animals = props => (
	
	<div className="animCard" onClick={() => props.handleIncrement(props.id)}>
    <div className="img-container">
      <img
        alt={props.name}
        src={props.image}
      />
    </div>
  </div>

	)

export default animals