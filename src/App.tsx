import React from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";


function App() {
    return (
        <div className="App">
            {/*/!*<PageTitle title={"IT-INCUBATOR"}/>*!/*/}
            {/*<UncontrolledAccordion titleValue={"Menu"} collapsed={false}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"} collapsed={true}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<OnOff/>*/}
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
