import propertyReducer from "./property";
import { combineReducers } from "redux";

/**
 * Root reducer, merges all the individual application reducers.
 */
export const combinedReducers = combineReducers({
  propertyData: propertyReducer,
});

export default combinedReducers;
