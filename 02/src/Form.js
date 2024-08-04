/////Learning useState with the help of Form

import React, { useState } from "react";

const Form = () => {

    ///////Multiple States
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleName = (e) => {
  //     console.log(e.target.value);
  //     setName(e.target.value);
  //   };

  //   const handleEmail = (e) => {
  //     console.log(e.target.value);
  //     setEmail(e.target.value);
  //   };

  //   const handlePassword = (e) => {
  //     console.log(e.target.value);
  //     setPassword(e.target.value);
  //   };


  //////Handling Multiple States into A Single State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInput}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
