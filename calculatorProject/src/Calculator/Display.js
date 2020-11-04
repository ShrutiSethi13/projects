import React, {useContext} from 'react';
import {NumberContext} from "./Numberprovider";
import {DisplayStyles} from "../styles/style";

const Display = () => {
    const {number , storedNumber, operatorType} = useContext(NumberContext);
    return (
        <DisplayStyles>
        <h2>{!number.length && !storedNumber ? 0 : number || storedNumber}</h2>
        <p>{!storedNumber ? 'ENTER SOME NUMBERS' : `${storedNumber} ${operatorType} ${number}`}</p>
        </DisplayStyles>
    );
}

export default Display;
