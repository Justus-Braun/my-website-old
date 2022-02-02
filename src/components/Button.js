import React from "react";
import './button.css';

export default function Button({ imgSrc, style, onButtonClick, svgMultiplyer, dimensions }) {

    const imgSize = dimensions.width / svgMultiplyer < 50 ? dimensions.width / svgMultiplyer + 50 : dimensions.width / svgMultiplyer;
    return (
        <button
            className="button"
            style={style}
            onClick={onButtonClick}
        >
            <img src={imgSrc} width={imgSize} height={imgSize} alt="submit" />
        </button>
    );
}