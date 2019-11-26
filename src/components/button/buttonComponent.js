import React from 'react'
import './buttonComponent.css'
function ButtonComponent(props) {
    
    return (
        <button onClick={props.methodToRun}>{props.name}</button>
    )
}

export default ButtonComponent
