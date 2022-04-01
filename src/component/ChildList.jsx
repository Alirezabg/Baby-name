import React from "react";
import jsonData from "../babyNamesData.json";

const ChildList = (props) => {
  const filteredData = jsonData.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(props.input);
    }
  });
  return (
    <div>
      <p>Welcome</p>
      {filteredData
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((baby) => (
          <button
            className={
              baby.sex === "f"
                ? "p-3 mb-2 bg-success text-white"
                : "p-3 mb-2 bg-danger text-white"
            }
          >
            {baby.name}
          </button>
        ))}
    </div>
  );
};

export default ChildList;
