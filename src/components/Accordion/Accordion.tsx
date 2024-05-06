import React from 'react';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export const Accordion = ({titleValue, collapsed, onChange, items, onClick}: AccordionPropsType) => {
        return (
            <div>
                <AccordionTitle title={titleValue} onChange={onChange}/>
                {!collapsed && <AccordionBody onClick={onClick} items={items}/>}
            </div>
        );
};

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = ({title, onChange}: AccordionTitlePropsType) => {
    return (
        <h3 onClick={onChange}>-- {title} --</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = ({items,onClick}: AccordionBodyPropsType) => {
    return (
        <ul>
            {items.map((i, index) => <li onClick={() => {onClick(i.value)}}  key={index}>{i.title}</li>)}
        </ul>
    )
}

