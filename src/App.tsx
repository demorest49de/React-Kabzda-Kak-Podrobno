import React, {useState} from 'react';
import './App.css'
import {Accordion} from "./components/accordion/Accordion";
import {Select} from './components/select/Select';

export type ItemType = {
    title: string
    value: any
}

function App() {


    const items: ItemType[] = [
        {
            title: 'Moscow',
            value: 1
        },
        {
            title: 'Vancouver',
            value: 2
        },
        {
            title: 'Guadalajara',
            value: 3
        },
        {
            title: 'Palo-alto',
            value: 4
        },
    ]

    return (
        <div className="App">
            <Select
                items={items}
            />
        </div>
    );
}

export default App;
