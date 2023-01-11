import { configureStore, createSlice } from "@reduxjs/toolkit";

let userID = createSlice({
  name: "userID",
  initialState: 1,
  reducers: {
    changeUserID1() {
      return 1;
    },
    changeUserID2() {
      return 2;
    },
  },
});

export let { changeUserID1, changeUserID2 } = userID.actions;

let location = createSlice({
  name: "location",
  initialState: "서울특별시 동작구 상도로 369",
  reducers: {
    changeLocation: (state, action) => {
      return (state = action.payload);
    },
  },
});

export let { changeLocation } = location.actions;

let locationLatLng = createSlice({
  name: "locationLatLng",
  initialState: { lat: 37.49551295026773, lng: 126.95670057588336 },
  reducers: {
    changeLocationLatLng: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
  },
});

export let { changeLocationLatLng } = locationLatLng.actions;

export default configureStore({
  reducer: {
    userID: userID.reducer,
    location: location.reducer,
    locationLatLng: locationLatLng.reducer,
  },
});
