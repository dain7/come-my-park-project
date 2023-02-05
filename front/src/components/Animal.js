import React, { useState, useRef, useEffect } from "react";
import "../assets/css/animal.css";
import { motion } from "framer-motion";
import AnimalInfo from "../components/Animalnfo";
import whiteDogImg from "../assets/image/whiteDog.png";
import blackDogImg from "../assets/image/blackDog.png";
import brownDogImg from "../assets/image/brownDog.png";

const Animal = ({ name, mbti, info }) => {
  const node = useRef();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const clickOutside = (e) => {
      // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
      if (isOpen && node.current && !node.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [isOpen]);

  const maxX = window.innerWidth;
  const maxY = window.innerHeight;

  const [x, setX] = useState(Math.random() * maxX);
  const [y, setY] = useState(Math.random() * maxY);

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <div ref={node}>
      <motion.img
        key={brownDogImg.src}
        src={`${brownDogImg}`}
        animate={{ x: x, y: y }}
        transition={{ duration: 10 }}
        onAnimationComplete={() => {
          setX(Math.random() * maxX);
          setY(Math.random() * maxY);
        }}
        onClick={handleOpenModal}
      />
      {isOpen && <AnimalInfo name={name} mbti={mbti} info={info}></AnimalInfo>}
    </div>
  );
};

export default Animal;
