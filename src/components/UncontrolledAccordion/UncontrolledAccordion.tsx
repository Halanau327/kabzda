import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion = ({titleValue}: AccordionPropsType) => {
    let [collapsed, setCollapsed] = useState(true)

        return (
            <div>
                <AccordionTitle title={titleValue}/>
                <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
                {!collapsed && <AccordionBody/>}
            </div>
        );
};

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = ({title}: AccordionTitlePropsType) => {
    return (
        <h3>-- {title} --</h3>
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

