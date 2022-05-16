import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Lego from "./Lego";
import Creeper from "./Creeper3.js";
import { OrbitControls } from "@react-three/drei";
import GroundPlane from "./components/GroundPlane";
import BackDrop from "./components/Backdrop";
import Sphere from "./components/Sphere";
import KeyLight from "./components/KeyLight";
import Scroll from "./images/Slide-1.png";
import Panning from "./images/Panning.png";
import Slide from "./images/Slide.png";
import MKeyboard from "./images/M.png";
import LKeyboard from "./images/L.png";
import "./styles.css";

// Reference: https://www.youtube.com/watch?v=q7yH_ajINpA
export default function App() {
  const [play, setPlay] = useState(false);
  const [light, setLight] = useState(true);

  // Reference: https://ricard.dev/how-to-get-random-hex-color-with-javascript/
  const random_color = () => {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }

  useEffect(() => {
    const setMovement = (event) => {
      if (event.key === "m" || event.key === "M") {
        setPlay(!play)
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
        setLight(random_color)
      }
    };

    window.addEventListener("keypress", setLighting);
    return () => {
      window.removeEventListener("keypress", setLighting);
    };
  }, [light]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "2rem"
    }}>
      <div className="title">
        階層モデリングと照明
        <div className="sub-title">
          Dionisius Baskoro Samudra - 1906350774 | Nofaldi Fikrul Atmam - 1906398420
        </div>
      </div>
      <Canvas style={{ width: "80vw", height: "50vh" }}>
        <GroundPlane />
        <BackDrop />
        <OrbitControls />
        <KeyLight brightness={50} color={light} />
        <Sphere />
        <Suspense fallback={null}>
          <Lego play={play} />
          <Creeper play={play} />
        </Suspense>
      </Canvas>
      <div style={{
        marginTop: "2rem",
        display: "flex",
        marginBottom: "4rem"
      }}>
        <div className="control">
          Zoom In/Out
          <div>
            <img src={Scroll} style={{
              width: "3rem",
              marginTop: "1rem"
            }}
            />
          </div>
          <div className="control-content">
            Scroll
          </div>
        </div>
        <div className="control">
          Camera Panning
          <div>
            <img src={Panning} style={{
              width: "3rem",
              marginTop: "1rem"
            }}
            />
          </div>
          <div className="control-content">
            Hold and Drag
          </div>
        </div>
        <div className="control">
          Camera Slide
          <div>
            <img src={Slide} style={{
              width: "3rem",
              marginTop: "1rem"
            }}
            />
          </div>
          <div className="control-content">
            Hold and Drag
          </div>
        </div>
        <div className="control">
          Animation
          <div>
            <img src={MKeyboard} style={{
              width: "3rem",
              marginTop: "1rem"
            }}
            />
          </div>
          <div className="control-content">
            Click
          </div>
        </div>
        <div className="control">
          Lighting
          <div>
            <img src={LKeyboard} style={{
              width: "3rem",
              marginTop: "1rem"
            }}
            />
          </div>
          <div className="control-content">
            Click
          </div>
        </div>
      </div>
      <footer class="footer">
        Build with ❤️ by SKUP GAMING <br />
        {`Nofaldi Fikrul Atmam & Dionisius Baskoro Samudra`}
        <div style={{ marginTop: "2rem" }}>
          <a
            href="https://www.flaticon.com/"
            title="keyboard icons"
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            Icons created by Freepik - Flaticon
          </a>
        </div>
      </footer>
    </div>
  );
}
