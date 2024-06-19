import {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)


    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("useEffect only first render")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    // const initValue = useMemo(generateData, [])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SimpleExampleClock = () => {
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample");

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, []);

    return <>
        Hello, counter: {counter}
        {/*<time dateTime={toISOString({counter})}></time>*/}
    </>
}



