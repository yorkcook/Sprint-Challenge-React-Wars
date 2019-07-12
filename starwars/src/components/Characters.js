import React, { useState, useEffect } from "react";

import axios from "axios";
import Element from "./Element";

const Characters = () => {
  const [charactersAll, setCharactersAll] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        console.log("res", res);
        setCharactersAll(res.data.results);
      })
      .catch(err => console.log("That's not a planet, it's a space station!"));
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      {charactersAll.map(characters => (
        <Element characters={characters} />
      ))}
    </div>
  );
};

export default Characters;
