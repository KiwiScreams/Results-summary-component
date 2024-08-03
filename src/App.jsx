function App() {
  return (
    <>
      <div class="container flex">
        <section class="result">
          <h3>Your result</h3> <div class="circle">0</div>
          <p>of 100</p> <b>Great</b> <p>Your score text here</p>
        </section>
        <section class="sumary">
          <h3>Summary</h3>
          <div class="rows">
            <div class="row flex">
              <div class="left-cont">
                <img src="" />
                <b>Reaction</b>
              </div>

              <div class="right-cont">
                <p>
                  <b>92</b>/100
                </p>
              </div>
            </div>
            <div class="row flex">
              <div class="left-cont">
                <img src="" />
                <b>Memory</b>
              </div>
              <div class="right-cont">
                <p>
                  <b>92</b>/100
                </p>
              </div>
            </div>
            <div class="row flex">
              <div class="left-cont">
                <img src="" />
                <b>Verbal</b>
              </div>
              <div class="right-cont">
                <p>
                  <b>92</b>/100
                </p>
              </div>
            </div>
            <div class="row flex">
              <div class="left-cont">
                <img src="" />
                <b>Visual</b>
              </div>
              <div class="right-cont">
                <p>
                  <b>92</b>/100
                </p>
              </div>
            </div>
          </div>
          <p class="btn">Continue</p>
        </section>
      </div>
    </>
  );
}

export default App;
