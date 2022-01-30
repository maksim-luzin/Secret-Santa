import { Storage } from "../enums";

const getToken = () => localStorage.getItem(Storage.TOKEN);

export { getToken };
