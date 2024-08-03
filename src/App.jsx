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
  const [randomNumbers, setRandomNumbers] = useState([
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
  ]);
  const [displayNumbers, setDisplayNumbers] = useState([0, 0, 0, 0]);
  const [meanValue, setMeanValue] = useState(0);

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
        setDisplayNumbers((prevNumbers) => {
          return prevNumbers.map((num, index) => {
            if (num < randomNumbers[index]) {
              return num + 1;
            }
            return num;
          });
        });
        setMeanValue((prevMean) => {
          const sum = displayNumbers.reduce((a, b) => a + b, 0);
          return Math.round(sum / displayNumbers.length);
        });
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [animationStarted, targetValue, randomNumbers, displayNumbers]);

  useEffect(() => {
    handleButtonClick();
  }, []);

  const handleButtonClick = () => {
    setValue(0);
    setTargetValue(Math.floor(Math.random() * 100) + 1);
    setAnimationStarted(true);
    setRandomNumbers([
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1,
    ]);
    setDisplayNumbers([0, 0, 0, 0]);
  };

  return (
    <>
      <div className="container flex">
        <section className="result">
          <h3>Your result</h3>
          <div className="circle">
            <div className="circle-box">
              <p>{meanValue}</p>
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
                  <b>{randomNumbers[0]}</b>/ 100
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
                  <b>{randomNumbers[1]}</b>/ 100
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
                  <b>{randomNumbers[2]}</b>/ 100
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
                  <b>{randomNumbers[3]}</b>/ 100
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
