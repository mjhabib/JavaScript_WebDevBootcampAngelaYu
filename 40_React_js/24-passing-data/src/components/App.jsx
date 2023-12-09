import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import Contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
    // Warning: Each child in a list should have a unique "key" prop.
    // I could also use 'email' instead of 'id' since they're unique too
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      mail={contact.email}
    />
  );
}

export default function App() {
  return (
    <div>
      <Heading heading="My Contacts"></Heading>

      {Contacts.map(createCard)}

      {/* <Card
        name={Contacts[0].name}
        img={Contacts[0].imgURL}
        tel={Contacts[0].phone}
        mail={Contacts[0].email}
      />

      <Card
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        tel={Contacts[1].phone}
        mail={Contacts[1].email}
      />

      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        tel={Contacts[2].phone}
        mail={Contacts[2].email}
      /> */}
    </div>
  );
}
