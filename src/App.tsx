import React from 'react';
import './App.css'
import {Accordion} from "./Accordion";

function App() {

    return (
        <div className="App">
            <Accordion
                titleValue={'Menu'}
                collapsed={false}
            />
        </div>
    );
}

export default App;
