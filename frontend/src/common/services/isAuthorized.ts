import { api } from '../helpers';
import { QueryRoutes, FetchMethod } from '../enums';

const isAuthorizedService = async () => {
  const response = await api({
    endpoint: QueryRoutes.USER,
    method: FetchMethod.GET,
    request: "",
  });
  return response.json();
};

export { isAuthorizedService };
