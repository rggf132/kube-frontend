import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import task from "./task";
import user from "./user";

export default history =>
  combineReducers({
    router: connectRouter(history),
    task,
    user
  });
