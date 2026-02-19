import React from "react";
import { headerData } from "../util/header";

const Util = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <ul>
      {headerData.utils.map((item) => (
        <a key={item.id}>
          <a href={item.href} onClick={handleClick}>
            <img src={item.icon} alt={item.label} />
          </a>
        </a>
      ))}
    </ul>
  );
};

export default Util;
