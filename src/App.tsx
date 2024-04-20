import React, {useState} from 'react';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    let [on, setOn] = useState<boolean>(true)

    return (
        <div className="App">
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<Accordion titleValue="Menu" collapsed={accordionCollapsed} onClick={() => {setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            {/*<UncontrolledAccordion/>*/}
            {/*<OnOff value={on} onClick={setOn}/>*/}
            <UncontrolledOnOff onClick={setOn}/> {on.toString()}
        </div>
    )
}

// type PageTitlePropsType = {
//     title: string
// }
//
// const PageTitle = ({title}: PageTitlePropsType) => {
//     return (
//         <h1>
//             {title}
//         </h1>
//     )
// }


export default App;
