import React from 'react';

export const OnOff = () => {
    return (
        <div>
           <OnOffButton onOff={false}/>
        </div>
    );
};

type OnOffButtonPropsType = {
    onOff: boolean
}

const OnOffButton = ({onOff}:OnOffButtonPropsType) => {
    return(
        <div>
            {onOff && <button>ON</button>}
            {!onOff && <button>OFF</button>}
        </div>
    )
}





