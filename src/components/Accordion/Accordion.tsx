import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
}

export const Accordion = ({titleValue, collapsed, onClick}: AccordionPropsType) => {
        return (
            <div>
                <AccordionTitle title={titleValue} onClick={onClick}/>
                {!collapsed && <AccordionBody/>}
            </div>
        );
};

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = ({title, onClick}: AccordionTitlePropsType) => {
    return (
        <h3 onClick={onClick}>-- {title} --</h3>
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

