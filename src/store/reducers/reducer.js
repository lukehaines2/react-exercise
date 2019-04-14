import { combineReducers } from "redux";

import selectedLessons from "./selectedLessons";
import lessonItems from "../staticData/all-lessons";

// all lessons could have come from the API
// for ease, just use fixture data instead:
const allLessons = (state = lessonItems, action) => {
  switch (action.type) {
    default:
      return state
  }
};

const appReducers = combineReducers({
  allLessons: allLessons,
  selectedLessons
});

export default appReducers
