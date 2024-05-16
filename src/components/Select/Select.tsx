import React, {useState} from 'react';
import styles from './Select.module.css'


type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = ({value, onChange, items}: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    const selectedItem = items.find(i => i.value === value)
    const hoveredItem = items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        {
            onChange(value);
            toggleItems();
        }
    }

    const onKeyUp = () => {
        for(let i = 0; i < items.length; i++) {

        }
    }

    return (
        <>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active && <div className={styles.items}>
                        {items.map(i => <div
                            onMouseEnter={() => {setHoveredElementValue(i.value)}}
                            className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                            key={i.value}
                            onClick={() => {onItemClick(i.value)
                        }}>{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    );
}