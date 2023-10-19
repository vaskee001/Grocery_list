import React from "react";
import { GoTrash } from "react-icons/go";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li
      className="item"
      style={{
        listStyle: "none",
      }}
    >
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        style={
          item.checked
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <GoTrash
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delite ${item.item}`}
      ></GoTrash>
    </li>
  );
};

export default LineItem;
