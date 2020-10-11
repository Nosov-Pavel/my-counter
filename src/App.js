import React, {useState} from 'react';

import './App.css';

function App() {
    const [counters, setCounters] = useState([30, 20, 10]);

    const addCounter=() => {
        const arr = [...counters];
        const element = 1;
        arr.push(element);
        setCounters(arr)
    }

    return (
        <div className='App'>
            <button onClick={addCounter}>AddNewCounters</button>
            {counters.map((el, ind)=><li>Counter{ind+1}<button>-</button>({el})<button>+</button></li>)}

        </div>
    );
}

export default App;


