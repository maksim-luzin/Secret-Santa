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
  wishList: santaInitialState,
};

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  wishList: santaReducer,
});

export { initialState, rootReducer };
