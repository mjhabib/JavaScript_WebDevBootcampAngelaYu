import React from "react";
import Heading from './Heading'
import List from './List'
import anyNamePi, {doublePi, triplePi} from './math'

// import * as pi from './math'
// pi.default, pi.doublePi(), pi.triplePi()

function App(){
    return (
        <div>
            <Heading />

            <List />

            <p>This is pi with a custom name: {anyNamePi}</p>

            <p>Double pi with original name: {doublePi()}</p>

            <p>Triple pi with original name: {triplePi()}</p>


        </div>
    )
}

export default App