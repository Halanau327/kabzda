import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export const Accordion = ({titleValue, collapsed}: AccordionPropsType) => {
        return (
            <div>
                <AccordionTitle title={titleValue}/>
                <AccordionTitle title={titleValue}/>
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

