import image_1 from "./assets/images/icon-reaction.svg";
import image_2 from "./assets/images/icon-memory.svg";
import image_3 from "./assets/images/icon-verbal.svg";
import image_4 from "./assets/images/icon-visual.svg";

function App() {
  return (
    <>
      <div className="container flex">
        <section className="result">
          <h3>Your result</h3>
          <div className="circle">
            <div className="circle-box">
              <p>0</p>
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
                <b>Reaction</b>
              </div>

              <div className="right-cont">
                <p>
                  <b>92</b>/ 100
                </p>
              </div>
            </div>
            <div className="row flex">
              <div className="left-cont">
                <img src={image_2} />
                <b>Memory</b>
              </div>
              <div className="right-cont">
                <p>
                  <b>92</b>/ 100
                </p>
              </div>
            </div>
            <div className="row flex">
              <div className="left-cont">
                <img src={image_3} />
                <b>Verbal</b>
              </div>
              <div className="right-cont">
                <p>
                  <b>92</b>/ 100
                </p>
              </div>
            </div>
            <div className="row flex">
              <div className="left-cont">
                <img src={image_4} />
                <b>Visual</b>
              </div>
              <div className="right-cont">
                <p>
                  <b>92</b>/ 100
                </p>
              </div>
            </div>
          </div>
          <p className="btn">Continue</p>
        </section>
      </div>
    </>
  );
}

export default App;
