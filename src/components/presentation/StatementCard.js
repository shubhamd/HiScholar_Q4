import React, { Component } from 'react'

export default (props) => {
	const user =  props.user; // can be null
	console.log("user in the personal_statement form", user);
	const personal_statement = (user)? user.personal_statement : "";
  // console.log("personal statement in the component", personal_statement)
 return (
	<div>
  	<form>
       <div className="card">
         <img style={{boxSize: 200}} style={{height: 200}} className="card-img-top" src="/img/purple.jpeg" alt="Purple"/>
         <div style={{padding: 10}} className="card-block">
           <h4 style={{textTransform:'capitalize'}} className="card-title">Personal Statement</h4>
           <p className="card-text">{personal_statement}</p>
         </div>
       </div>
  	</form>
	</div>
	)
}
