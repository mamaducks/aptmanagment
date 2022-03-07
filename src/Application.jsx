import React, { useState } from "react";
// const COLORS = ["white", "red", "blue", "black", "cream"];

function ApplyForm() {
  const [values, setValues] = useState({
    first: "",
    last: "",
    phone: "",
    comments: "",
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const saveFormData = async () => {
    const response = await fetch("/api/registration", {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      await saveFormData();
      alert("Your registration was successfully submitted!");
      setValues({
        first: "",
        last: "",
        phone: "",
        comments: "",
      });
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Start Application</h2>

      <label>Name*:</label>
      <input type="text" required value={values.first} onChange={set("first")} />
      <small>First Name</small>
<label>Name*:</label>
      <input type="text" required value={values.last} onChange={set("last")} />
            <small>Last Name</small>

      {/* <label>Color*:</label>
      <select required value={values.color} onChange={set("color")}>
        <option value="">Select color</option>
        {COLORS.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select> */}

      <label>Phone Number*:</label>
      <input
        type="number"
        required
        min="1"
        value={values.phone}
        onChange={set("phone")}
      />

      {/* <label>Phone Number*:</label>
      <input
        type="number"
        required
        min="1"
        value={values.age}
        onChange={set("phone")}
      /> */}

      <label>Comments:</label>
      <textarea value={values.comments} onChange={set("comments")} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default function Apply() {
  return (
    <div className="App">
      <ApplyForm />
    </div>
  );
}
