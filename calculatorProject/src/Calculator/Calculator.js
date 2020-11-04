import React from 'react';
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import ClearButton from "./ClearButton";
import EqualButton from "./EqualButton";
import Display from "./Display";
import {BoxContainer, CalculatorStyles} from "../styles/style";

const Calculator = () => (
    <BoxContainer>
        <CalculatorStyles>
            <div className="display">
                <h1>Calculator</h1>
                <Display/>
            </div>
            <div className="number-pad">
                <NumberButton buttonValue={7}/>
                <NumberButton buttonValue={8}/>
                <NumberButton buttonValue={9}/>
                <OperatorButton buttonValue={"+"}/>
                <NumberButton buttonValue={4}/>
                <NumberButton buttonValue={5}/>
                <NumberButton buttonValue={6}/>
                <OperatorButton buttonValue={"/"}/>
                <NumberButton buttonValue={3}/>
                <NumberButton buttonValue={2}/>
                <NumberButton buttonValue={1}/>
                <OperatorButton buttonValue={"*"}/>
                <ClearButton/>
                <NumberButton buttonValue={0}/>
                <EqualButton/>
                <OperatorButton buttonValue={"-"}/>
            </div>
        </CalculatorStyles>
    </BoxContainer>
);

export default Calculator;