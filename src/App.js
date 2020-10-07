import React, {useState} from 'react';

import './App.css';

function App() {
    const [counters, setCounters] = useState(['counter1', 'counter2', 'counter3']);

    const addCounter=() => {
        const arr = [...counters];
        const element = 'counter' + arr.length;
        arr.push(element);
        setCounters(arr)
    }

    return (
        <div className='App'>
            <button onClick={addCounter}>AddNewCounters</button>
            {counters.map(el => <li>{el}</li>)}

        </div>
    );
}

export default App;
