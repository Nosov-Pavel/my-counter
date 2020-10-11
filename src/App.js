import React, {useState} from 'react';

import './App.css';

function App() {
    const [counters, setCounters] = useState([1, 1, 1]);

    const addCounter=() => {
        const arr = [...counters];
        const element = 1;
        arr.push(element);
        setCounters(arr)
    }

    return (
        <div className='App'>
            <button onClick={addCounter}>AddNewCounters</button>
            {counters.map((el, ind)=><li>{ind}</li>)}

        </div>
    );
}

export default App;


