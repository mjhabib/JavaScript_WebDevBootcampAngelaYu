import React from "react";
import Entry from './Entry';
import emojipedia from '../emojipedia'

function fetchEmoji(emoji){
  return <Entry 
    key={emoji.id}
    emoji={emoji.emoji}
    name={emoji.name}
    meaning={emoji.meaning}
  />
}

export default function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(fetchEmoji)}</dl>

      {/* Anonymous function and fat-arrow syntax */}
      {/* {emojipedia.map( emoji => 
      <Entry 
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
      />
)} */}

    </div>
  );
}

