import "./idSearch.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import {
  changeLocationLatLng,
  changeUserID1,
  changeUserID2,
} from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

function IdSearch() {
  const userID = useSelector((state) => {
    return state.userID;
  });

  const locationLatLng = useSelector((state) => {
    return state.locationLatLng;
  });

  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const url = "locaiton/"
  const fetchData = async(userID) => {
    setLoading(true);
    try {
      const result = await axios.get(`${url}${userID}`);
      dispatch(changeLocationLatLng(result));
      setLoading(false);
      console.log(locationLatLng);
    } catch (error) {
      setError(error);
    }
  }
  return (
    <div id="idSearchBox">
      <DropdownButton
        id="dropdown-basic-button"
        title="아이디 조회하기"
        variant="dark"
      >
        <Dropdown.Item
          onClick={() => {
            dispatch(changeUserID1(userID));
            fetchData(userID);
          }}
        >
          아이디 1
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            dispatch(changeUserID2(userID));
            fetchData(userID);
          }}
        >
          아이디 2
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default IdSearch;
