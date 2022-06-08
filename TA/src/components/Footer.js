import Scroll from "../images/Slide-1.png";
import Panning from "../images/Panning.png";
import Slide from "../images/Slide.png";
import MKeyboard from "../images/M.png";
import LKeyboard from "../images/L.png";

export default function Footer() {
  return (
    <>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          marginBottom: "4rem",
        }}
      >
        <div className="control">
          Zoom In/Out
          <div>
            <img
              src={Scroll}
              style={{
                width: "3rem",
                marginTop: "1rem",
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
