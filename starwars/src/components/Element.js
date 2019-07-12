import React from "react";

const Element = props => {
  console.log("in element", props);
  return (
    <div>
      {props.characters.name} {props.characters.height}
    </div>
  );
};

export default Element;
