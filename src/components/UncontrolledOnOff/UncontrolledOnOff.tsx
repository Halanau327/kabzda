import React, {useState} from 'react';

type UncontrolledOnOffPropsType = {
    onClick:(on:boolean) => void
}


export const UncontrolledOnOff = ({onClick}:UncontrolledOnOffPropsType) => {
    let [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px;",
        backgroundColor: on ? "green" : "white"
    };

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px;",
        backgroundColor: on ? "white" : "red"
    };

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black ",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px;",
        backgroundColor: on ? "green" : "red"
    };

    const onClicked = () => {
        setOn(true)
        onClick(true)
    }
    const offClicked = () => {
        setOn(false)
        onClick(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>

            {/*{OnOff && <button>ON</button>}*/}
            {/*{!OnOff && <button>OFF</button>}*/}
        </div>
    )
}





