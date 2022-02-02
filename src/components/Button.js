import React from "react";
import './button.css';

export default function Button({ imgSrc, style, onButtonClick }) {
    return (
        <button
            className="button"
            style={style}
            onClick={onButtonClick}
        >
            <img src={imgSrc} width="100vw" height="100vw" alt="submit"/>
        </button>
    );
}