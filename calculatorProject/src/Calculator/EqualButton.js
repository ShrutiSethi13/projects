import React, {useContext} from 'react';
import {NumberContext} from "./Numberprovider";

const EqualButton = () => {
    const { calculate } = useContext(NumberContext);
    return (
        <button type="button" onClick={() => calculate()}>
            =
        </button>
    );
};

export default EqualButton;