import React from "react";
import "./header.css";

const Nav = props => 
(
	<header>
		<div className="title">
			<h1>Click Game</h1>
		</div>
			<div className="score">Score:{props.score}</div>
			<div className="score">Highscore:{props.highscore}</div>		    
	</header>

	)

export default Nav;