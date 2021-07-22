import React from "react";
import styled from "styled-components";
import DogTile from "./DogTile";

const Wrapper = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 10px;
  margin: 10px;
`;


function Dogs({ breeds = []}) {
  return (
    <Wrapper>
      {breeds.length > 0 && breeds.map(breed => <DogTile key={breed.id} breed={breed} />)}
    </Wrapper>
  );
}

export default Dogs;
