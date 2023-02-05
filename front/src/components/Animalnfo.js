import React, { useState } from "react";
import "../assets/css/animal.css";
import styled from "styled-components";
import brownDogImg from "../assets/image/brownDog.png";

const AnimalInfo = (img) => {
  return (
    <InfoContainer>
      <AnimalName>콩이</AnimalName>
      <AnimalMbti>ISTJ</AnimalMbti>
      <AnimalImage src={brownDogImg}></AnimalImage>
      <AnimalInformation>
        한번 시작한 일은 끝까지 해내는 의지의 강아지. <br />
        책임감, 정직함, 공과사 구분이 철저하다.
      </AnimalInformation>
    </InfoContainer>
  );
};

export default AnimalInfo;

const InfoContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 200px;
  width: 100vw;
  align-items: center;
  background-color: #fff;

  display: flex;
  flex-direction: column;
`;

const AnimalName = styled.div`
  height: 40px;
  background-color: #ffe0e0;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 4%;
  padding-right: 4%;
  margin-right: 20%;
  margin-top: 2%;

  font-size: large;
  font-weight: 700;
`;
const AnimalMbti = styled.div`
  font-size: large;
  font-weight: 700;
  margin-right: 20%;
  margin-top: 5px;
`;

const AnimalImage = styled.img`
  width: 200px;
  height: 250px;
  position: absolute;
  bottom: 40%;
  left: 48%;
  z-index: 1;
`;

const AnimalInformation = styled.div`
  text-align: center;
  font-size: medium;
  margin-top: 15px;
  width: 100%;
  height: 100%;
`;
