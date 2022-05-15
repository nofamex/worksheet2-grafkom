import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Lego from "./Lego";
import Creeper from "./Creeper3.js";
import { OrbitControls } from "@react-three/drei";
import GroundPlane from "./components/GroundPlane";
import BackDrop from "./components/Backdrop";
import Sphere from "./components/Sphere";
import KeyLight from "./components/KeyLight";
import "./styles.css";

// Reference: https://www.youtube.com/watch?v=q7yH_ajINpA
export default function App() {
  const [play, setPlay] = useState(false);
  const [light, setLight] = useState(true);

  return (
    <>
      <Canvas>
        <GroundPlane />
        <BackDrop />
        <OrbitControls />
        {light && <KeyLight brightness={20} color={"#ffffff"} />}
        <Sphere />
        <Suspense fallback={null}>
          <Lego play={play} />
          <Creeper play={play} />
        </Suspense>
      </Canvas>
      <button onClick={() => setPlay(!play)}>
        {play ? "Stop Movement" : "Start Movement"}
      </button>
      <button onClick={() => setLight(!light)}>
        {light ? "Turn off light" : "Turn on light"}
      </button>
    </>
  );
}
