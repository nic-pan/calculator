import { useReducer, useState } from "react";
import Button from "./Button";
import Display from "./Display";
import './Calculator.css'

const initialState = {
    input: '0',
    expression: '0',
    calculatedResult: false
}

const calculatorAction = {
    CLEAR: 'CLEAR',
    WRITE: 'WRITE',
    CALCULATE: 'CALCULATE',
}

const reducer = (state, action) => {
    switch (action.type) {        
        case calculatorAction.CLEAR:
            console.log("CLEAR");
            return {...initialState}
        case calculatorAction.WRITE:
            const newExpression =  action.newExpression;
            console.log(newExpression);
            return {
                input: action.newInput,
                expression: newExpression
            }
        case calculatorAction.CALCULATE:
            const result = eval(state.expression);
            return {
                calculatedResult: true,
                input: result,
                expression: '0'
            }
        default:
            console.warn("Unsupported action type: ", action.type);
            return state;
    }
}

const Calculator = (props) => {
    let {buttons} = props;
    const [calcState, dispatch] = useReducer(reducer, initialState);

    const updateExpression = (e) => {
        const clickedItem = e.target.innerHTML;
        const type = e.target.className.includes('number-btn') ? 'number' : 'operator';
        
        let newInput = '';
        switch (e.target.id) {
            case 'clear': {
                dispatch({type: calculatorAction.CLEAR});
                return;
            }
            case 'decimal': {
                console.log(calcState.input)
                if (!calcState.input || calcState.input == '0') {
                    dispatch({type: calculatorAction.WRITE, newInput: parseFloat("0.")});
                    return;
                } if (calcState.input.toString().includes('.')) {
                    // TODO allow  multiple values with decimal: 5.5 + 10.8
                    const regex = new RegExp('\d+\.?\d*[\+\-\*\/]\d+');
                    const matches = regex.test(calcState.input);
                    return; 
                } 
                dispatch({type: calculatorAction.WRITE, newInput: parseFloat(calcState.input + ".0")});
            }
            case 'zero': {
                if (calcState.input && calcState.input.startsWith('0')) return;
            }
            default: {
                switch (type) {
                case 'number':
                    newInput = updateNumberInput(clickedItem, calcState.calculatedResult);
                    break;
                case 'operator':
                    if (clickedItem == '=') {
                        calculate();
                        return;
                    } else {
                        newInput = updateInputWithOperator(clickedItem);
                    }
                    break;
                default:
                    console.warn('Unsupported type: ', type);
                    break;
                }
            }
        }
        dispatch({type: calculatorAction.WRITE, newExpression: newInput.expression, newInput: newInput.input})
    }
    
    const updateNumberInput = (number, clearFirst) => {
        let newInput = number;
        if (!clearFirst) {
            newInput = calcState.input == '0' ? number : `${calcState.input}${number}`;
        }
        return {input: newInput, expression: newInput}
    }

    const updateInputWithOperator = (operator) => {
        const operatorRegexp = new RegExp(`[+\\-*/]$`);
        if (!operatorRegexp.test(calcState.input)) {
            return {input: `${calcState.input}${operator}`, expression: `${calcState.expression}${operator}`};
        }
    }

    const calculate = () => {
        const expressionStr = calcState.expression;
        const operatorRegexp = new RegExp(`^[+\\-*/]`);
        if (operatorRegexp.test(calcState.input)) {
            dispatch({type: calculatorAction.WRITE, newExpression: `0${expressionStr}`})
        }
        dispatch({type: calculatorAction.CALCULATE})
        console.log(expressionStr)
    }

    return <div id="calculator" className="container centered">
        <div className="display-container">
            <Display content={calcState.input}/>
        </div>
        <div className="row g-2">
            {buttons.operators.slice(0,3).map(button => <Button key={button.id} className="operator-btn" id={button.id} label={button.label} onClick={updateExpression}/>)}
        </div>
        <div className="row g-2">
            {buttons.numbers.map(button => <Button key={button.id} className={`number-btn ${buttons.numbers.indexOf(button) == buttons.numbers.length - 1 && 'wide'}`} id={button.id} label={button.label} onClick={updateExpression}/>)}
        </div>
        <div className="row g-2">
            {buttons.operators.slice(3).map(button => <Button key={button.id} className="operator-btn" id={button.id} label={button.label} onClick={updateExpression}/>)}
        </div>
    </div>

}

export default Calculator;