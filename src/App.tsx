import React from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRating";


function App() {
    return (
        <div className="App">
            {/*<OnOff/>*/}
            {/*<Rating value={2}/>*/}
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={"Users"}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = ({title}: PageTitlePropsType) => {
    return (
        <h1>
            {title}
        </h1>
    )
}


export default App;
