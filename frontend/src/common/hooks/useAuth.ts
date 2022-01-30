import { useTypedSelector } from "./store";

const useAuth = () =>
  useTypedSelector(({ authentication }) =>
    !authentication.token ? { isAuthorized: false } : { isAuthorized: true }
  );

export { useAuth };
