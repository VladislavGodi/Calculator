import { useState } from 'react';
import './App.css';

function App() {
    const [display, setDislpay] = useState(''); // Текущее значение на дисплее
    const [firstValue, setFirstValue] = useState(null); // Первое введенное число
    const [operation, setOperation] = useState(null); // Текущая операция

    const buttonClick = (value) => {
        setDislpay(display + value);
    };

    const clearClick = () => {
        setDislpay('');
        setFirstValue(null);
        setOperation(null);
    };

    const operationClick = (op) => {
        setFirstValue(parseFloat(display));
        setOperation(op);
        setDislpay('');
    };

    const resultClick = () => {
        if (firstValue !== null && operation && display) {
            const secondValue = parseFloat(display);
            let result;
            if (operation === '+') {
                result = firstValue + secondValue;
            }
            if (operation === '-') {
                result = firstValue - secondValue;
            }
            setDislpay(result);
            setFirstValue(null);
            setOperation(null);
        }
    };

    return (
        <div>
            <h1>Калькулятор</h1>
            <div className={'calculator-display'}>{display}</div>
            <div className={'calculator-keys'}>
                <div className={'calculator-operators'}>
                    <button onClick={() => operationClick('+')}>+</button>
                    <button onClick={() => operationClick('-')}>-</button>
                    <button onClick={clearClick}>С</button>
                    <button onClick={resultClick}>=</button>
                </div>
                <div className={'calculator-numbers'}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                        <button key={number} onClick={() => buttonClick(number)}>
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
