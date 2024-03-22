import React, {useState} from 'react';

export default {
    title: 'UseMemo hook'
}


export const UseMemoHookStories = () => {

    let [a, setA] = useState<number>(1)
    let [b, setB] = useState<number>(1)
    console.log(' a: ', a);
    let resulta = 1;
    let resultb = 1;

    for (let i = 1; i <= a; i++) {
        console.log(' a, resulta: ', a, resulta);
        resulta *= i;
    }

    console.log(' resulta: ', resulta);

    for (let i = 1; i <= b; ++i) {
        resultb *= i;
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <p>Result for a: {resulta}</p>
            <p>Result for b: {resultb}</p>
        </div>
    );
};