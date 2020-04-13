import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [position, setPosition] = React.useState({}); //holds x and y positions
  const [error, setError] = React.useState(null);
  const [note, setNote] = React.useState("Not close to the gym");
  const [arrived, setArrive] = React.useState(false);

  const gym = { x: 39.768996942, y: -86.17166598 };

  const onChange = ({ coords }) => {
    setPosition({
      x: coords.latitude,
      y: coords.longitude,
    });
  };
  const onError = (error) => {
    setError(error.message);
  };

  const changeButton = () => {
    setArrive(!arrived);
  };

  React.useEffect(() => {
    const geo = navigator.geolocation; //db based off of current location

    if (position.x === gym.x && position.y === gym.y) {
      setNote("You have arrived");
    } else {
    }

    let watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, [arrived]);

  return (
    <div className="App">
      <h1>{position.x}</h1>
      <br />
      <h1>{position.y}</h1>
      <div>{note}</div>
      <button onClick={changeButton}>Click to see</button>
    </div>
  );
}

export default App;
