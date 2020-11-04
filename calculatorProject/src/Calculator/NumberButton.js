import React, {useContext} from 'react';
import {NumberContext} from "./Numberprovider";

const NumberButton = ({ buttonValue }) => {
    const { handleSetDisplayValue } = useContext(NumberContext);
    return (
        <button type="button" onClick={() => handleSetDisplayValue(buttonValue)}>
            {buttonValue}
        </button>
    );
};

export default NumberButton;
