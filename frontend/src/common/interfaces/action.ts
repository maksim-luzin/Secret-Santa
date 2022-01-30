interface IAction<T = string, P = never> {
  type: T;
  payload: P;
}

export type {IAction}
