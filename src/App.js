import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Allentown" />
        <footer>
          This project was coded by Thaisha Rivera and is Open sourced on
          <a href="https://github.com/Trivera0713"> Github </a> Icons from
          <a href="https://www.amcharts.com/"> Amcharts</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
