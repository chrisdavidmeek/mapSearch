import React from "react";
import "./App.css";
import GoogleMapReact from "google-map-react";

function App() {
  const iupui = [39.773856, -86.177997];
  const albany = [42.652345, -73.75817];
  const seattle = [47.60461, -122.335205];
  const annArbor = [42.280412, -83.741811];
  const myLoc = [];
  const [location, setLocation] = React.useState(iupui);

  const [newX, setNewX] = React.useState(0);
  const [newY, setNewY] = React.useState(0);

  const changeX = (e) => {
    setNewX(e);
    myLoc.push(e);
  };
  const changeY = (e) => {
    setNewY(e);
    myLoc.push(e);
  };

  const pushChanges = () => {
    myLoc.push(newX, newY);
  };
  const setNewLocation = () => {
    pushChanges();
    setLocation(myLoc);
    console.log(myLoc);
  };

  return (
    <div className="App">
      <h2> Warp to </h2>
      <button onClick={() => setLocation(albany)}>Albany, New York</button>
      <button onClick={() => setLocation(seattle)}>Seattle, Washington</button>
      <button onClick={() => setLocation(annArbor)}>Ann Arbor, Michigan</button>
      <h2> Try your own locations!</h2>

      <form>
        <input
          type="text"
          placeholder="Input a latitude"
          onChange={(e) => changeX(Number(e.target.value))}
        ></input>
        <input
          type="text"
          placeholder="Input a longitude"
          onChange={(e) => changeY(Number(e.target.value))}
        ></input>
      </form>
      <button onClick={() => setNewLocation()}>Submit</button>

      <div style={{ height: "600px", width: "auto" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAroi5UF-gCX8V1vi44aApurvJEiBKJEos" }}
          center={location}
          defaultZoom={16}
          distanceToMouse={() => {}}
        ></GoogleMapReact>
      </div>
    </div>
  );
}

export default App;
