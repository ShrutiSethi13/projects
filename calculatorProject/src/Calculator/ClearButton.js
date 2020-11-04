import React, {useContext} from 'react';
import {NumberContext} from "./Numberprovider";

const ClearButton = () => {
    const { handleClearValue } = useContext(NumberContext);
    return(
        <button type="button" onClick={() => handleClearValue()}>C</button>
    );
};

export default ClearButton;