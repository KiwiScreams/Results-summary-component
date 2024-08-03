function App() {
  return (
    <>
      <div className="container flex">
        <section className="result">
          <h3>Your result</h3> <div className="circle">0</div>
          <p>of 100</p> <b>Great</b> <p>Your score text here</p>
        </section>
        <section className="summary">
          <h3>Summary</h3>
          <div className="rows">
            <div className="row flex">
              <div className="left-cont">
                <img src="" />
                <b>Reaction</b>
              </div>

              <div className="right-cont">
                <p>
                  <b>92</b>/100
                </p>
              </div>
            </div>
            <div className="row flex">
              <div className="left-cont">
                <img src="" />
                <b>Memory</b>
              </div>
              <div className="right-cont">
                <p>
                  <b>92</b>/100
                </p>
              </div>
            </div>
            <div className="row flex">
              <div className="left-cont">
                <img src="" />
                <b>Verbal</b>
              </div>
              <div className="right-cont">
                <p>
                  <b>92</b>/100
                </p>
              </div>
            </div>
            <div className="row flex">
              <div className="left-cont">
                <img src="" />
                <b>Visual</b>
              </div>
              <div className="right-cont">
                <p>
                  <b>92</b>/100
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
