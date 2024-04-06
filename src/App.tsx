import React from 'react';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onOff/OnOff";


function App() {
    return (
        <div className="App">
            {/*/!*<PageTitle title={"IT-INCUBATOR"}/>*!/*/}
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={true}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            <OnOff/>
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
