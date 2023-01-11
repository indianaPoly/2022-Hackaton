import "./App.css";
import IdSearch from "./idSearch/idSearch";
import Location from "./map/location";
import LocationLog from "./locationLog/locationLog";
import BottomBar from "./bottomBar/bottomBar";

function App() {
  return (
    <div id="container">
      <div id="idSearchContainer">
        <IdSearch></IdSearch>
      </div>
      <div id="mapContainer">
        <Location></Location>
      </div>
      <div id="locationLogContainer">
        <LocationLog></LocationLog>
      </div>
      <div id="bottomBarContainer">
        <BottomBar></BottomBar>
      </div>
    </div>
  );
}

export default App;
