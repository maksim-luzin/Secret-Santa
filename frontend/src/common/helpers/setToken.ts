import { Storage } from "../enums";

const setToken = (token = "") => localStorage.setItem(Storage.TOKEN, token);

export { setToken };
