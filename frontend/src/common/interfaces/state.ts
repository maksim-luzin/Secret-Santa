import { AuthenticationState } from "../../scenes/Auth/reducer";
import { SantaState } from "../../scenes/WishList/reducer";

interface IStoreState {
  authentication: AuthenticationState;
  wishList: SantaState;
}

export type { IStoreState };
