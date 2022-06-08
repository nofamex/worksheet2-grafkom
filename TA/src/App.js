import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Chicken from "./objects/Chicken";
import Tree from "./objects/Tree";
import Ender from "./objects/Ender";
import Person from "./objects/Person";
import { OrbitControls } from "@react-three/drei";
import GroundPlane from "./components/GroundPlane";
import BackDrop from "./components/Backdrop";
import KeyLight from "./components/KeyLight";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles.css";

// Reference: https://www.youtube.com/watch?v=q7yH_ajINpA
export default function App() {
  const [play, setPlay] = useState(true);
  const [light, setLight] = useState(true);

  // Reference: https://ricard.dev/how-to-get-random-hex-color-with-javascript/
  const random_color = () => {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  };

  useEffect(() => {
    const setMovement = (event) => {
      if (event.key === "m" || event.key === "M") {
        setPlay(!play);
      }
    };

    window.addEventListener("keypress", setMovement);
    return () => {
      window.removeEventListener("keypress", setMovement);
    };
  }, [play]);

  useEffect(() => {
    const setLighting = (event) => {
      if (event.key === "l" || event.key === "L") {
        setLight(random_color);
      }
    };

    window.addEventListener("keypress", setLighting);
    return () => {
      window.removeEventListener("keypress", setLighting);
    };
  }, [light]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Header />
      <Canvas style={{ width: "80vw", height: "80vh" }}>
        <GroundPlane />
        <BackDrop />
        <OrbitControls />
        <KeyLight brightness={50} color={light} />
        <Suspense fallback={null}>
          <Chicken play={play} />
          <Tree />
          <Ender play={play} />
          <Person play={play} />
        </Suspense>
      </Canvas>
      <Footer />
    </div>
  );
}
