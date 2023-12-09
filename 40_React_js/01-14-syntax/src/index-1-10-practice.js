import React from 'react';
import ReactDOM from 'react-dom/client';

const fName = 'MJ'
const lName = 'Habib'
const loremImg = 'https://picsum.photos/200'
const customInlineStyling = {
    color: "blue",
    fontSize: "20px",
    border: "1px solid black"
}


var seconds = new Date().getSeconds();
var secondsText;
if (seconds % 2 === 0){
    secondsText = `Clock's second is even: ${seconds}`
    customInlineStyling.color = "orange"
} else {
    secondsText = `Clock's second is odd: ${seconds}`
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    {/* I can add "expressions" below but not "statements" like "if" */}

        {/* External styling */}
        <h1 className='heading' contentEditable spellCheck='false'>Created by {fName + " " + lName}</h1>

        <h2>Copyright {new Date().getFullYear()}</h2>

        <h3>Show: {secondsText}</h3>

        {/* In-line styling which is less popular */}
        <p style={{color: 'red'}}>Math 2 + 2 = {2+2}</p>

        <p style={customInlineStyling}>This is another text!</p>

        <ul>
            <li>This is a random number: {Math.floor(Math.random() * 10)}</li>
            
            <br/>
            <li><img src='https://assets.bonappetit.com/photos/5c5d936be81bbf522a957993/1:1/w_2700,h_2700,c_limit/sambolognese-ramen-noodles.jpg' alt='google-noodle'></img></li>
            
            <li><img src={loremImg + "?grayscale"} alt='lorem-random'></img></li>
        </ul>
    </div>
);
