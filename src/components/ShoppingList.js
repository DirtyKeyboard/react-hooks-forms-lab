import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onItemFormSubmit(newObj)
  {
    setItems([...items, newObj])
  }
  const itemsToDisplay = items.filter((item) => {
    if (search === '')
    {
    if (selectedCategory === "All")
      return true;
    else
      return item.category === selectedCategory;
    }
    else
    {
      if (selectedCategory === 'All' && item.name.toLowerCase().includes(search.toLowerCase()))
        return true;
      else if (selectedCategory === item.category && item.name.toLowerCase().includes(search.toLowerCase()))
        return true;
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={search} onSearchChange={setSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
