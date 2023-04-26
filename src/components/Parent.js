import React, { useState } from "react";
import DisplayData from "./DisplayData";
import Form from "./Form";

function ParentComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  function handleNewsletterChange(event) {
    // .checked, not .value!
    setNewsletter(event.target.checked);
    console.log(event.target.checked)
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    console.log(event.target.value)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
    console.log(event.target.value)
  }

  return (
    <div>
    <Form
      firstName={firstName}
      lastName={lastName}
      newsletter={newsletter}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handleNewsletterChange={handleNewsletterChange}
    />
    <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  );
}

export default ParentComponent;