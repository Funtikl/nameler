import React, {Component} from 'react';

const coverComponent = (props) =>{
	return(
		<div>
		<form onSubmit={props.onSubmitHandler}>
		<input type='text' onChange={props.onChangeHandler} />
		</form>
		</div>
		)
}

export default coverComponent;