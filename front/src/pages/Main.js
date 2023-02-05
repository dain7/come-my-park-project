import React from "react";
import styled from "styled-components";
import backgroundImg from "../assets/image/grass.jpeg";
import Animal from "../components/Animal";
import AnimalInfo from "../components/Animalnfo";
import whiteDogImg from "../assets/image/whiteDog.png";
import blackDogImg from "../assets/image/blackDog.png";
import brownDogImg from "../assets/image/brownDog.png";

const Main = (props) => {
  const dogList = [whiteDogImg, blackDogImg, brownDogImg];

  return (
    <MainContainer>
      <MainMessage>
        닉네임님의 공원에 <br />
        현재 3마리의 친구들이 놀고 있어요!
      </MainMessage>
      {dogList.map((dog) => (
        <Animal img={dog}> </Animal>
      ))}
      {/* <AnimalInfo></AnimalInfo> */}
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0;
  align-items: center;
  background-image: url(${backgroundImg});
`;

const MainMessage = styled.h1`
  color: white;
  position: absolute;
  top: 15px;
  left: 18px;
`;
