import './App.css';
import Button from './Button';
import Display from './Display';

function App() {
  const buttons = {
    numbers: [
      { id: 'one', label: '1'  },
      { id: 'two', label: '2'  },
      { id: 'three', label: '3'  },
      { id: 'four', label: '4'  },
      { id: 'five', label: '5'  },
      { id: 'six', label: '6'  },
      { id: 'seven', label: '7'  },
      { id: 'eight', label: '8'  },
      { id: 'nine', label: '9'  },
      { id: 'zero', label: '0'  },
      { id: 'decimal', label: '.'  },
    ],
    operators: [
      { id: 'equals', label: '='  },
      { id: 'add', label: '+'  },
      { id: 'subtract', label: '-'  },
      { id: 'multiply', label: '*'  },
      { id: 'divide', label: '/'  },
      { id: 'clear', label: 'AC'  },
    ],
  }

  const calculate = () => {
    // TODO decide how to pass the args
  }

  return (
    <div className="App">
      <Display content="0"/>
      {buttons.numbers.map(button => <Button id={button.id} label={button.label}/>)}
      {buttons.operators.map(button => <Button id={button.id} label={button.label}/>)}
    </div>
  );
}

export default App;
