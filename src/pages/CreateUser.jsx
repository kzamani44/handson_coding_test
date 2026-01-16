import { useState } from "react";
import React from "react";

function CreateUser({ setuserData }) {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setuserData((prev) => {
      const existingUserIndex = prev.findIndex((user) => user.email === email);

      if (existingUserIndex !== -1) {
        const updatedUsers = [...prev];
        updatedUsers[existingUserIndex] = {
          ...updatedUsers[existingUserIndex],
          items: [
            ...updatedUsers[existingUserIndex].items,
            { itemName, itemPrice },
          ],
        };
        return updatedUsers;
      } else {
        const customerData = {
          full_name,
          email,
          items: [{ itemName, itemPrice }],
        };
        return [...prev, customerData];
      }
    });

    setFullName("");
    setEmail("");
    setItemName("");
    setItemPrice("");
  };

  return (
    <div className="form">
      <h3>Add Item to users</h3>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-items">
          <label htmlFor="full_name">Full Name:</label>
          <input
            type="text"
            name="full_name"
            id="full_name"
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-items">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-items">
          <label htmlFor="item_name">Item Name:</label>
          <input
            type="text"
            name="item_name"
            id="item_name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="form-items">
          <label htmlFor="item_price">Price:</label>
          <input
            type="text"
            name="item_price"
            id="item_price"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;