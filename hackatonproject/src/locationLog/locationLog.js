import { useSelector } from "react-redux";
import "./locationLog.css";

function LocationLog() {
  const location = useSelector((state) => {
    return state.location;
  });

  return <div id="locationLog">최근 위치 : {location}</div>;
}

export default LocationLog;
