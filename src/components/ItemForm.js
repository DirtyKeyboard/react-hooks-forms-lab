import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newObj, setNewObj] = useState(
    {
      id: uuid(),
      name: "",
      category: "Produce"
    })
  return (
    <form onSubmit={e => {
      e.preventDefault();
      onItemFormSubmit(newObj)
      }} className="NewItem">
      <label>
        Name:
        <input onChange={e => setNewObj({...newObj, name: e.target.value})} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={e => setNewObj({...newObj, category: e.target.value})} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
