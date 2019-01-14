import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  form: formReducer,
  todos,
  visibilityFilter
});
