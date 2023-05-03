import Button from "./Button";
import Display from "./Display";

const Calculator = (props) => {
    let {buttons} = props;

    const calculate = (e) => {
        // TODO decide how to pass the args
        const type = e.target.className == 'number-btn' ? 'number' : 'operator';
        switch (type) {
            case 'number':
                break;
            case 'operator':
                break;
            default:
                console.warn('Unsupported type: ', type);
                break;
        }
    }
    
    return <div id="calculator">
        <Display content="0"/>
        {buttons.numbers.map(button => <Button key={button.id} className="number-btn" id={button.id} label={button.label} onClick={calculate}/>)}
        {buttons.operators.map(button => <Button key={button.id} className="operator-btn" id={button.id} label={button.label} onClick={calculate}/>)}
    </div>

}

export default Calculator;