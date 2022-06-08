import Scroll from "../images/Slide-1.png";
import Panning from "../images/Panning.png";
import Slide from "../images/Slide.png";
import MKeyboard from "../images/M.png";
import LKeyboard from "../images/L.png";
import VKeyboard from "../images/V.png";
import WKeyboard from "../images/W.png";
import AKeyboard from "../images/A.png";
import SKeyboard from "../images/S.png";
import DKeyboard from "../images/D.png";
import XKeyboard from "../images/X.png";
import ZKeyboard from "../images/Z.png";
import QKeyboard from "../images/Q.png";
import EKeyboard from "../images/E.png";
import Select from "react-select";

export default function Footer({ ...props }) {
  const options = [
    { value: "chicken", label: "Chicken" },
    { value: "enderman", label: "Enderman" },
    { value: "human", label: "Human" },
    { value: "spotlight", label: "Spotlight" },
  ];

  const handleSelectorChange = (value) => {
    props.setSelector(value);
  };

  return (
    <>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          marginBottom: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            className="control"
            style={{ textAlign: "center" }}>Select Object to Control</p>
          <Select
            options={options}
            onChange={(v) => handleSelectorChange(v.value)}
          />
        </div>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {/* Scene Control */}
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "2px dashed black",
              paddingTop: "32px"
            }}
          >
            <p className="control">
              Scene Control
            </p>
            <div style={{ display: "flex" }}>
              <div className="control">
                Zoom In/Out
                <div>
                  <img
                    src={Scroll}
                    style={{
                      width: "3rem",
                      marginTop: "1rem",
                      display: "flex",
                      marginLeft: "30px",
                    }}
                  />
                </div>
                <div className="control-content">Scroll</div>
              </div>
              <div className="control">
                Camera Panning
                <div>
                  <img
                    src={Panning}
                    style={{
                      width: "3rem",
                      marginTop: "1rem",
                    }}
                  />
                </div>
                <div className="control-content">Hold and Drag</div>
              </div>
              <div className="control">
                Camera Slide
                <div>
                  <img
                    src={Slide}
                    style={{
                      width: "3rem",
                      marginTop: "1rem",
                    }}
                  />
                </div>
                <div className="control-content">Hold and Drag</div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="control">
                Animation
                <div>
                  <img
                    src={MKeyboard}
                    style={{
                      width: "3rem",
                      marginTop: "1rem",
                    }}
                  />
                </div>
                <div className="control-content">Click</div>
              </div>
              <div className="control">
                Wireframe/Shading
                <div>
                  <img
                    src={VKeyboard}
                    style={{
                      width: "3rem",
                      marginTop: "1rem",
                    }}
                  />
                </div>
                <div className="control-content">Click</div>
              </div>
              <div className="control">
                Lighting
                <div>
                  <img
                    src={LKeyboard}
                    style={{
                      width: "3rem",
                      marginTop: "1rem",
                    }}
                  />
                </div>
                <div className="control-content">Click</div>
              </div>
            </div>
          </div>

          {/* Object Control */}
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "2px dashed black",
              paddingTop: "32px"
            }}
          >
            <p className="control">
              Object Control
            </p>
            <div style={{ display: "flex" }}>
              <div className="control">
                Up
                <div>
                  <img
                    src={WKeyboard}
                    style={{
                      width: "3rem",
                      marginTop: "1rem",
                    }}
                  />
                </div>
                <div className="control-content">Click</div>
              </div>
              <div className="control">
                Down
                <div>
                  <img
                    src={SKeyboard}
                    style={{
                      width: "3rem",
                      marginTop: "1rem",
                    }}
                  />
                </div>
                <div className="control-content">Click</div>
              </div>
              <div className="control">
                Left
                <div>
                  <img
                    src={AKeyboard}
                    style={{
                      width: "3rem",
                      marginTop: "1rem",
                    }}
                  />
                </div>
                <div className="control-content">Click</div>
              </div>
              <div className="control">
                Rigth
                <div>
                  <img
                    src={DKeyboard}
                    style={{
                      width: "3rem",
                      marginTop: "1rem",
                    }}
                  />
                </div>
                <div className="control-content">Click</div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="control">
                Front
                <div>
                  <img
                    src={ZKeyboard}
                    style={{
                      width: "3rem",
                      marginTop: "1rem",
                    }}
                  />
                </div>
                <div className="control-content">Click</div>
              </div>
              <div className="control">
                Back
                <div>
                  <img
                    src={XKeyboard}
                    style={{
                      width: "3rem",
                      marginTop: "1rem",
                    }}
                  />
                </div>
                <div className="control-content">Click</div>
              </div>
              <div className="control">
                L-Rotate
                <div>
                  <img
                    src={EKeyboard}
                    style={{
                      width: "3rem",
                      marginTop: "1rem",
                    }}
                  />
                </div>
                <div className="control-content">Click</div>
              </div>
              <div className="control">
                R-Rotate
                <div>
                  <img
                    src={QKeyboard}
                    style={{
                      width: "3rem",
                      marginTop: "1rem",
                    }}
                  />
                </div>
                <div className="control-content">Click</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        Build with ❤️ by SKUP GAMING <br />
        {`Nofaldi Fikrul Atmam & Dionisius Baskoro Samudra`}
        <div style={{ marginTop: "2rem" }}>
          <a
            href="https://www.flaticon.com/"
            title="keyboard icons"
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Icons created by Freepik - Flaticon
          </a>
        </div>
      </footer>
    </>
  );
}
