import React, {useReducer} from 'react';
import {reducer} from "./Reducer";

type AccordionPropsType = {
    titleValue: string
}

export type ActionType = {
    type: string

}

export const UncontrolledAccordion = ({titleValue}: AccordionPropsType) => {
   // let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

        return (
            <div>
                {/*<AccordionTitle title={titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
                <AccordionTitle title={titleValue} onClick={() => { dispatch({type: "TOGGLE-COLLAPSED"})}}/>
                {!state.collapsed && <AccordionBody/>}
            </div>
        );
};

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = ({onClick, title}: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => {onClick()}}>{title}</h3>
    )
}


const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

