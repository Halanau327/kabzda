import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion = ({titleValue}: AccordionPropsType) => {
    let [collapsed, setCollapsed] = useState(true)

        return (
            <div>
                <AccordionTitle title={titleValue}/>
                {!collapsed && <AccordionBody/>}
                <button onClick={() => setCollapsed(false)}>TOGGLE</button>
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

