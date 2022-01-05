import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"

function NewHousingCard({ addHousing }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [address, setAddress] = useState("")
  const [url, setUrl] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/shelters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        rating: rating,
	      address: address, 
	      url: url
      }),
    })
      .then((r) => r.json())
      .then((shelters) => addHousing(shelters));
  }

  return (
    <div className="new-plant-form">
      <h2>New Shelters</h2>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          step="1"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(parseFloat(e.target.value))}
        />
	<input
          type="text"
          name="address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
	<input
          type="url"
          name="url"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
}

export default NewHousingCard;