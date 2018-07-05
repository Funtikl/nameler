import React, {Component} from 'react';
import style from './styles/headerCSS';

const headerComponent = () =>{
	return(
		<div style={style.header} className="header">
		<h1 style={style.name}>Nameler</h1>
		</div>
		)
}

export default headerComponent;