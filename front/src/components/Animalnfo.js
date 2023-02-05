import React, { useState } from "react";
import "../assets/css/animal.css";
import styled from "styled-components";
import brownDogImg from "../assets/image/brownDog.png";

const AnimalInfo = ({ name, mbti, img, info }) => {
  return (
    <InfoContainer>
      <AnimalName>{name}</AnimalName>
      <AnimalMbti>{mbti}</AnimalMbti>
      <AnimalImage src={brownDogImg}></AnimalImage>
      <AnimalInformation>{info}</AnimalInformation>
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
  margin-top: 45px;
  width: 100%;
  height: 100%;
`;
