/** @format */

import React from "react";

const List = ({ todoList, setTodo }) => {
  const displayList = () => {
    return (
      <div>
        {todoList.map((item) => {
          return (
            <div className="task_item">
              <li>
                {item.todo}{" "}
                <button
                  onClick={() => {
                    setTodo(todoList.filter((i) => i.id !== item.id));
                  }}>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/82-512.png"
                    alt="delete"
                  />
                </button>
              </li>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="list_container" style={{ overflow: "auto" }}>
      <ul>{displayList()}</ul>
    </div>
  );
};

export default List;
