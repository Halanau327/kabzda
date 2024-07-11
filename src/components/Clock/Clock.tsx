import React from 'react';

import {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type ClockPropsType = {
    mode: 'digital' | 'analog'
};

export const get2digitsString = (num: number) => num < 10 ? "0" + num : num


export const Clock = ({mode}:ClockPropsType) => {
    const [date, setDate] = useState(new Date())

   useEffect(() => {
       const intervalID = setInterval(() => {
            setDate(new Date())
            console.log('Tick')
        }, 1000)

        // return clearInterval(intervalID)
    }, []);

    let view;

    switch(mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
            view = <DigitalClockView date={date}/>
    }

    return (<div>
            {view}
        </div>
    );
};

export type ClockViewPropsType = {
    date: Date
}



