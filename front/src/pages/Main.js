import React from "react";
import styled from "styled-components";
import backgroundImg from "../assets/image/grass.jpeg";
import Animal from "../components/Animal";

const Main = (props) => {
  const dogList = [
    {
      name: "콩이",
      mbti: "ISTJ",
      info: "~~~~~~~~~~~",
    },
    {
      name: "왈왈이",
      mbti: "ENTP",
      info: "~~~~~$$$$$$$$$$$$$$^^^~~~~~~ <br/> ~~~~~~~~~~~~~~~~~~~!!!",
    },
    {
      name: "덕구",
      mbti: "ISFP",
      info: "~~~~~~~~~~~",
    },
  ];

  return (
    <MainContainer>
      <MainMessage>
        닉네임님의 공원에 <br />
        현재 3마리의 친구들이 놀고 있어요!
      </MainMessage>
      {dogList.map((dog) => (
        <Animal name={dog.name} mbti={dog.mbti} info={dog.info}></Animal>
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
