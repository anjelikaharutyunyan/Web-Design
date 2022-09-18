import React from "react";
import Input from "../inputs/Input";

import './style.css';

const Button = ({
    label,
    onClick,
    disabled,
    labelActive,
    labelInActive,
    containerActive,
    containerInActive
}) => {
    onClick = () => {
        let inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    }
    return (
        <div className={
                `button ${
                    disabled && 'inActive'
                } 
        ${
                    disabled ? containerInActive : containerActive
                }`
            }
            onClick={onClick}>
            <p className={
                `label ${
                    disabled && 'labelInActive'
                }
        ${
                    disabled ? labelInActive : labelActive
                }`
            }>
                {label} </p>
        </div>

    )
};

export default Button;
