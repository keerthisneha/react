import { useState } from "react";
import data from "./components/data"
import Header  from "./components/header";
import "./components/experience.css"
function App() {
  const [receive, setReceive] = useState(0);

let transfer = [data[receive]].map((x, i) => (
    <Header
      key={i}
      name={x.name}
      heading={x.heading}
      date={x.date}
      description={x.Description}
      description1={x.Description1}
      description2={x.Description2}
    />
  ));

let fun = (e) => (
 setReceive(e.target.id)
)


  return (
    <div className="App">
      <div className="center">
        <h1 className="experience">Experience</h1>
        <p className="line"></p>
      </div>
      <div className="companies" onClick={fun}>
        <p id="0">CUKER</p>
        <p id="1">TCS</p>
        <p id="2">BIGDROP</p>
      </div>
      <main>{transfer}</main>
      <div className="center">
        <button className="more">MORE INFO</button>
      </div>
    </div>
  );
}

export default App;
