import React from 'react'; 
import './button.css';

function Button({label}){
    return <div aria-label='myButton'>{label}</div>
}

export default Button;