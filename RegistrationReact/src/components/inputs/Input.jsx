import React from "react";
import './style.css';

const Input = ({
    name, 
    type,
    active,
    onChange,
    disabled,
    inActive,
    placeholder
}) => {
const [value, setValue] = React.useState('');
    return (
        <input 
        name = {name}
        value = {value}
        type = {type}
        onChange = {e => setValue(e.target.value)}
        placeholder = {placeholder}
        />
    )
};

export default Input;
