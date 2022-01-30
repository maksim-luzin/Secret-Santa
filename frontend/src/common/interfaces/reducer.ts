import { IAction } from "./action";

type TReducer<TState> = (state: TState | undefined, action: IAction) => TState;

export type { TReducer };
