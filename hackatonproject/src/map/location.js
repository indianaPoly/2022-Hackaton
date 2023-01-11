import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLocation } from "../store";
import "./location.css";

const { kakao } = window;

const Location = () => {
  const dispatch = useDispatch();
  const locationLatLng = useSelector((state) => {
    return state.locationLatLng;
  });

  const makeMap = (lat, lng) => {
    var mapContainer = document.getElementById("map"),
      mapOption = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 5,
      };
    var map = new kakao.maps.Map(mapContainer, mapOption);
    map.setDraggable(false);
    var markerPosition = new kakao.maps.LatLng(lat, lng);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    var geocoder = new kakao.maps.services.Geocoder();
    var coord = new kakao.maps.LatLng(
      locationLatLng.lat,
      locationLatLng.length
    );
    var callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        dispatch(changeLocation(result[0].address.address_name));
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

  useEffect(() => {
    makeMap(locationLatLng.lat, locationLatLng.lng);
  }, []);

  return (
    <>
      <div id="map"></div>
    </>
  );
};

export default Location;
