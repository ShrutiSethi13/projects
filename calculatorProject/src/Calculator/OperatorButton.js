import React, {useContext} from 'react';
import {NumberContext} from "./Numberprovider";

const OperatorButton = ({ buttonValue }) => {
    const { handleSetOperationButton } = useContext(NumberContext);
    return (
        <button type="button" onClick={() => handleSetOperationButton(buttonValue)}>{buttonValue}</button>
    );
};

export default OperatorButton;