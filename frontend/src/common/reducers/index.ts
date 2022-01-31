import { combineReducers } from "redux";
import { IStoreState } from "../interfaces";
import authenticationReducer, {
  initialState as authenticationInitialState,
} from "../../scenes/Auth/reducer";
import santaReducer, {
  initialState as santaInitialState,
} from "../../scenes/WishList/reducer";

const initialState: IStoreState = {
  authentication: authenticationInitialState,
  wish: santaInitialState,
};

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  wish: santaReducer,
});

export { initialState, rootReducer };
