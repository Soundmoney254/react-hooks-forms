import React from "react";

function Form({handleLastNameChange,handleFirstNameChange,firstName,lastName,handleNewsletterChange,newsletter}) {

  return (
    <form>
     <input
        type="text"
        onChange={handleFirstNameChange}
        value={firstName}
        placeholder="First Name"
      />
      <input
        type="text"
        onChange={handleLastNameChange}
        value={lastName}
        placeholder="Last Name"
      />
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsletter}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;