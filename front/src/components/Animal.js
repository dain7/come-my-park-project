import React, { useState } from "react";
import "../assets/css/animal.css";
import { motion } from "framer-motion";

const Animal = ({ img }) => {
  const maxX = window.innerWidth;
  const maxY = window.innerHeight;

  const [x, setX] = useState(Math.random() * maxX);
  const [y, setY] = useState(Math.random() * maxY);

  return (
    <motion.img
      key={img.src}
      src={`${img}`}
      animate={{ x: x, y: y }}
      transition={{ duration: 10 }}
      onAnimationComplete={() => {
        setX(Math.random() * maxX);
        setY(Math.random() * maxY);
      }}
    />
  );
};

export default Animal;
