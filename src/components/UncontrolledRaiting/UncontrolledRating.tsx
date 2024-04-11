import React, {useState} from 'react';



export const UncontrolledRating = () => {
    const [value, setValue] = useState(0)
    const set = () => {
        setValue(value + 1)
    }

    return (
        <div>
            <Star selected={value > 0} strongStar={set} />
            <Star selected={value > 1} strongStar={set} />
            <Star selected={value > 2} strongStar={() => setValue(3)}/>
            <Star selected={value > 3} strongStar={() => setValue(4)}/>
            <Star selected={value > 4} strongStar={() => setValue(5)}/>

        </div>
    );
};

type StarPropsType = {
    selected: boolean
    strongStar: () => void
}

const Star = ({selected, strongStar}:StarPropsType) => {
    return selected ? <span onClick={strongStar}><b> star </b></span> : <span> star </span>
}