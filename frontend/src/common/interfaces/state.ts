import { IAuthenticationState } from "../../scenes/Auth/reducer";
import { ISantaState } from "../../scenes/WishList/reducer";

interface IStoreState {
  authentication: IAuthenticationState;
  wish: ISantaState;
}

export type { IStoreState };
