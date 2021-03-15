import React from "react";

const Contact = () => {
  return (
    <form className="form">
      <h2>Contact us</h2>
      <div className="formclass">
        <label>Name</label>
        <input placeholder="Name" />
        <label>Email</label>
        <input placeholder="Email" />
        <label>Message</label>
        <textarea placeholder="Message" />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Contact;
