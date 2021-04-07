/** @format */

import React from "react";

const Header = () => {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date();
  var today = new Date(),
    time = today.getHours() + ":" + today.getMinutes();

  return (
    <div className="Header">
      <h1>To-do App</h1>
      <h2>
        {days[d.getDay()]}, {months[d.getMonth()]}{" "}
        {d.getUTCDate() + ", " + d.getFullYear()}
      </h2>
      <h4>{time} </h4>
    </div>
  );
};

export default Header;
