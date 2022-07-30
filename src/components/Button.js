import React from "react";
import './Button.css';


const STYLES =[
    'btn--primary',
    'btn--outline'
];

const SIZES =[
    'btn--medium',
    'btn--large'
];


export const Button = ({childern,
    type,
    onclick,
    buttonStyle,
    buttonSize}) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonStyle : SIZES[0]

        return(
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onclick}
            type={type}>
              {childern}
            </button>
        )
    };