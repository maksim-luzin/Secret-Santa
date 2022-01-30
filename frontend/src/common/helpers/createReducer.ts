import { IAction, TReducer } from "../interfaces";

type Handlers<TState> = {
  [key: string]: (state: TState, action: IAction) => TState;
};

const createReducer = <TState>(
  initialState: TState,
  handlers: Handlers<TState>
): TReducer<TState> => {
  return (state = initialState, action: IAction): TState => {
    if (action.type in handlers) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};

export { createReducer };
