import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    title: 'OnOff',
    component: OnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff onClick={callback} value={true}/>
export const OffMode = () => <OnOff onClick={callback} value={false}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <OnOff onClick={setValue} value={value}/>
}