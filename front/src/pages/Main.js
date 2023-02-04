import React from "react";
import styled from "styled-components";
import backgroundImg from "../assets/image/grass.jpeg";
import Animal from "../components/Animal";
import whiteDogImg from "../assets/image/whiteDog.png";
import blackDogImg from "../assets/image/blackDog.png";
import brownDogImg from "../assets/image/brownDog.png";

const Main = (props) => {
  const dogList = [whiteDogImg, blackDogImg, brownDogImg];

  return (
    <MainContainer>
      {dogList.map((dog) => (
        <Animal img={dog} />
      ))}
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-image: url(${backgroundImg});
`;
