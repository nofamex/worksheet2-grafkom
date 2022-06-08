import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Chicken from "./objects/Chicken";
import Tree1 from "./objects/Tree1";
import Tree2 from "./objects/Tree2";
import Ender from "./objects/Ender";
import Person from "./objects/Person";
import Stone1 from "./objects/Stone1";
import Stone2 from "./objects/Stone2";
import { OrbitControls } from "@react-three/drei";
import GroundPlane from "./components/GroundPlane";
import BackDrop from "./components/Backdrop";
import { KeyLight, FillLight, RimLight } from "./components/KeyLight";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles.css";

// Reference: https://www.youtube.com/watch?v=q7yH_ajINpA
export default function App() {
  const [play, setPlay] = useState(true);
  const [light, setLight] = useState(true);
  const [wireframe, setWireframe] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);

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

  useEffect(() => {
    const setView = (event) => {
      if (event.key === "v" || event.key === "V") {
        if (wireframe) {
          window.location.reload(false);
        } else {
          setWireframe(!wireframe);
        }
      }
    };

    window.addEventListener("keypress", setView);
    return () => {
      window.removeEventListener("keypress", setView);
    };
  }, [wireframe]);

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
        <KeyLight brightness={30} color={light} /> {/* Direction Light */}
        <FillLight brightness={50} color={light} /> {/* Point Light */}
        <RimLight brightness={100} color={light} selected={selectedObject} />
        {/* Spot Light */}
        <Suspense fallback={null}>
          <Chicken
            play={play}
            selected={selectedObject}
            wireframe={wireframe}
          />
          <Tree1 wireframe={wireframe} />
          <Tree2 wireframe={wireframe} />
          <Ender play={play} selected={selectedObject} wireframe={wireframe} />
          <Person play={play} selected={selectedObject} wireframe={wireframe} />
          <Stone1 wireframe={wireframe} />
          <Stone2 wireframe={wireframe} />
        </Suspense>
      </Canvas>
      <Footer setSelector={setSelectedObject} />
    </div>
  );
}
