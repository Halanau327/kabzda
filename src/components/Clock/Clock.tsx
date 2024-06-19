import React from 'react';

import {useEffect, useState} from "react";

type ClockPropsType = {

};

const get2digitsString = (num: number) => num < 10 ? "0" + num : num


export const Clock = ({}:ClockPropsType) => {
    const [date, setDate] = useState(new Date())

   useEffect(() => {
       const intervalID = setInterval(() => {
            setDate(new Date())
            console.log('Tick')
        }, 1000)

        return clearInterval(intervalID)
    }, []);


    const secondsString = date.getSeconds() < 10 ? `0 + date.getSeconds` : date.getSeconds

    return (
        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())} </span>
        </div>
    );
};