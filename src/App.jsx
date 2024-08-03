import image_1 from "./assets/images/icon-reaction.svg";
import image_2 from "./assets/images/icon-memory.svg";
import image_3 from "./assets/images/icon-verbal.svg";
import image_4 from "./assets/images/icon-visual.svg";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [targetValue, setTargetValue] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    let intervalId;
    if (animationStarted) {
      intervalId = setInterval(() => {
        setValue((prevValue) => {
          if (prevValue < targetValue) {
            return prevValue + 1;
          }
          return prevValue;
        });
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [animationStarted, targetValue]);

  const handleButtonClick = () => {
    setValue(0);
    setTargetValue(Math.floor(Math.random() * 100) + 1);
    setAnimationStarted(true);
  };

  return (
    <>
      <div className="container flex">
        <section className="result">
          <h3>Your result</h3>
          <div className="circle">
            <div className="circle-box">
              <p>{value}</p>
              <p>of 100</p>
            </div>
          </div>
          <b>Great</b>
          <p className="text">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </section>

        <section className="summary">
          <h3>Summary</h3>
          <div className="rows flex">
            <div className="row flex">
              <div className="left-cont flex">
                <img src={image_1} />
                <b className="icon-1">Reaction</b>
              </div>
              <div className="right-cont">
                <p>
                  <b>80</b>/ 100
                </p>
              </div>
            </div>
            <div className="row flex">
              <div className="left-cont flex">
                <img src={image_2} />
                <b className="icon-2">Memory</b>
              </div>
              <div className="right-cont">
                <p>
                  <b>92</b>/ 100
                </p>
              </div>
            </div>
            <div className="row flex">
              <div className="left-cont flex">
                <img src={image_3} />
                <b className="icon-3">Verbal</b>
              </div>
              <div className="right-cont">
                <p>
                  <b>63</b>/ 100
                </p>
              </div>
            </div>
            <div className="row flex">
              <div className="left-cont flex">
                <img src={image_4} />
                <b className="icon-4">Visual</b>
              </div>
              <div className="right-cont">
                <p>
                  <b>73</b>/ 100
                </p>
              </div>
            </div>
          </div>
          <button className="btn" onClick={handleButtonClick}>
            Continue
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
