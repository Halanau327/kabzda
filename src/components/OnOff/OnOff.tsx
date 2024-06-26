type OnOffPropsType = {
    onClick: (value: boolean) => void
    value: boolean
}

export const OnOff = ({onClick, value}: OnOffPropsType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px;",
        backgroundColor: value ? "green" : "white"
    };

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px;",
        backgroundColor: value ? "white" : "red"
    };

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black ",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px;",
        backgroundColor: value ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => onClick(true)}>On</div>
            <div style={offStyle} onClick={() => onClick(false)}>Off</div>
            <div style={indicatorStyle}></div>

            {/*{OnOff && <button>ON</button>}*/}
            {/*{!OnOff && <button>OFF</button>}*/}
        </div>
    )
}





