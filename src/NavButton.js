import React from 'react';

const NavButton = (props) => {
    const isActive = props.pressed === props.name;
    return(
        <div 
        name = {props.name} 
        onClick = {props.handleClick} 
        className = {isActive ? "button-pushed" : "button-default"}>
            <h2 name = {props.name}> {props.text} </h2>
        </div>    
    );
}

export default NavButton;