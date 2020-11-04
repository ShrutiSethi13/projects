import React, {useState} from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {

    const [number , setNumber ] = useState('');
    const [storedNumber, setStoredNumber ] = useState('');
    const [operatorType, setOperatorType] = useState('');

    const handleSetDisplayValue = num => {
        if((!number.includes('.') || num !== '.') && number.length < 5) {
            setNumber(`${(number + num).replace(/^0+/,'')}`);
        }
    };

    const handleSetStoredValue = () => {
        setStoredNumber(number);
        setNumber('');
    }


    const handleClearValue = () => {
        setNumber('');
        setStoredNumber('');
        setOperatorType('');
    }

    const handleSetOperationButton = type => {
        if(number) {
            setOperatorType(type);
            handleSetStoredValue();
        }
        if(storedNumber) {
            setOperatorType(type);
        }
    }

    const calculate = () => {
        if (number && storedNumber) {
            switch (operatorType) {
                case '+':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
                    break;
                case '-':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);
                    break;
                case '/':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
                    break;
                case '*':
                    setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`);
                    break;
                default:
                    break;
            }
            setNumber('');
        }
    }

    return (
        <NumberContext.Provider
            value={{
                calculate,
                handleClearValue,
                operatorType,
                number,
                setNumber,
                storedNumber,
                handleSetDisplayValue,
                handleSetStoredValue,
                handleSetOperationButton
            }}
        >
            {props.children}
        </NumberContext.Provider>
    );
};

export default NumberProvider;