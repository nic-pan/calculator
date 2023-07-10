import './App.css';
import Calculator from './Calculator';

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
      { id: 'decimal', label: '.'  },
      { id: 'zero', label: '0'  },
    ],
    operators: [
      { id: 'clear', label: 'AC'  },
      { id: 'divide', label: '/'  },
      { id: 'multiply', label: '*'  },
      { id: 'add', label: '+'  },
      { id: 'subtract', label: '-'  },
      { id: 'equals', label: '='  },
    ],
  }

  return (
    <div className="App">
      <Calculator buttons={buttons}/>
    </div>
  );
}

export default App;
