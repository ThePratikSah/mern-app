import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ShoppingList.css";

function ShoppingList() {
  let [items, setItems] = useState([
    { id: uuidv4(), name: "Egg" },
    { id: uuidv4(), name: "Chocolates" },
    { id: uuidv4(), name: "Broom" },
    { id: uuidv4(), name: "Milk" },
  ]);

  function addItem() {
    const name = prompt("Enter Item name");
    if (name) {
      setItems([...items, { id: uuidv4(), name: name }]);
    }
  }

  function removeItem(id) {
    // console.log(id);
    setItems((state) => state.filter((item) => item.id !== id));
  }

  return (
    <div className="ShoppingList__container">
      <button className="buttonAdd" onClick={addItem}>
        Add🚀
      </button>
      <ul className="itemsList">
        {items.map(({ id, name }) => (
          <li onClick={() => removeItem(id)} className="listItem" key={id}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
