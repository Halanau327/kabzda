import React, {useState} from 'react';



export const UncontrolledAccordion = () => {
    let [collapsed, setCollapsed] = useState(true)

        return (
            <div>
                <AccordionTitle onClick={() => setCollapsed(!collapsed)}/>
                {!collapsed && <AccordionBody/>}
            </div>
        );
};

type AccordionTitlePropsType = {
    onClick: () => void
}

const AccordionTitle = ({onClick}: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => {onClick()}}>-- Menu --</h3>
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

