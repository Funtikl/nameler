import React, {Component} from 'react';
import style from './styles/headerCSS';

const headerComponent = () =>{
	return(
		<div style={style.header} className="header">
		
		<ul style={style.links}>
			<li style={style.line}><a href="">Home</a></li>
			<li style={style.line}><a href="">About</a></li>
		</ul>
		<h1 style={style.name}>Nameler</h1>
		</div>
		)
}

export default headerComponent;