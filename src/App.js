import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <footer>
          This project was coded by Thaisha Rivera and is
          <a href="https://github.com/Trivera0713"> Open sourced on Github</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
