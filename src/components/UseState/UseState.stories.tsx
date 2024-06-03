import {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

function generateData() {
    console.log('generateData')
    return 1
}


export const Example2 = () => {
    const [counter, setCounter] = useState(0)

    // const initValue = useMemo(generateData, [])

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter }
    </>
}

