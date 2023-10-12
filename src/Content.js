import React from "react";
import { useState } from "react";
import { GoTrash } from "react-icons/go";

const Content = () => {
  const [items, setItems] = useState(
    localStorage.getItem("shoppingList") === null
      ? [
          {
            id: 1,
            checked: false,
            item: "One half pound bag of Cocoa",
          },
          {
            id: 2,
            checked: false,
            item: "Item 2",
          },
          {
            id: 3,
            checked: false,
            item: "item 3",
          },
        ]
      : JSON.parse(localStorage.getItem("shoppingList"))
  );

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
    // localStorage.removeItem('shoppingList')
  };

  const handleDelete= (id)=>{
    
    const deletedItems= items.filter((item)=>
      item.id !== id
    )
    setItems(deletedItems);
    localStorage.setItem('shoppingList', JSON.stringify(deletedItems))
  }

  // const handleNameChange = () => {
  //   const names = ["Nikola", "Jovan", "Marko"];
  //   const int = Math.floor(Math.random() * 3);
  //   setName(names[int]);
  // };

  // const handleClick=()=>{
  //   setCount(count+1)
  //   console.log(count)
  // }

  // const handleClick2=(name)=>{
  //   console.log(`${name} was clicked`)
  // }

  // const handleClick3=(e)=>{
  //   console.log(e.target.innerText)
  // }

  return (
    <main>
      {items.length ?  (<ul>
        
        {items.map((item) => (
          <li
            className="item"
            key={item.id}
            style={{
              listStyle: "none",
            }}
          >
            <input
              type="checkbox"
              checked={item.checked}
              onClick={() => handleCheck(item.id)}
            />
            <label 
              style={(item.checked)? { textDecoration: 'line-through'}:{ textDecoration: 'none'}}
              onDoubleClick={() => handleCheck(item.id)}>
              {item.item}
            </label>
            <GoTrash role="button" tabIndex="0" onClick={()=>handleDelete(item.id)}></GoTrash>
          </li>
        ))}
      </ul>
      ):(
        <div id='noItem'>No items in your shopping list</div>
      )}
      
    </main>
  );
};

export default Content;
