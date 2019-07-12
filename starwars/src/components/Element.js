import React from "react";

import styled from "styled-components";

const Name = styled.p`
  color: red;
  font-size: 2rem;
`;

const Element = props => {
  console.log("in element", props);
  return (
    <div>
      <Name>{props.characters.name}</Name> {props.characters.height}
    </div>
  );
};

export default Element;
