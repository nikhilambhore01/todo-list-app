/** @format */

import { React } from "react";

const Form = ({ setTodo, len }) => {
  var itemtoAdd = "";
  const formHandling = (e) => {
    e.preventDefault();
    itemtoAdd = e.target.firstChild.value;
    if (itemtoAdd !== "") {
      setTodo((state) => [...state, { id: len, todo: itemtoAdd }]);
    }
    e.target.firstChild.value = "";
  };
  return (
    <div className="Form_container">
      <form onSubmit={formHandling}>
        <input type="text" placeholder="Add a item..." />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default Form;
