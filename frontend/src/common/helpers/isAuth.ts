import { isAuthorizedService } from "../services";

const isAuth = async () => {
  try {
    await isAuthorizedService();
    return { isAuthorized: true };
  } catch {
    return { isAuthorized: false };
  }
};

export { isAuth };
