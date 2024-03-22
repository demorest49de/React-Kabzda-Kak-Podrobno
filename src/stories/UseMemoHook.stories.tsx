import React, {useMemo, useState} from 'react';

export default {
    title: 'UseMemo hook'
}


export const UseMemoHookStories = () => {

    let [a, setA] = useState<number>(1)
    let [b, setB] = useState<number>(1)
    console.log(' a: ', a);
    let resulta = 1;
    let resultb = 1;

    resulta = useMemo(() => {
        let tempA = resulta
        for (let i = 1; i <= a; i++) {

            let fake = 0;
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempA *= i;
        }
        return tempA
    }, [a])

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