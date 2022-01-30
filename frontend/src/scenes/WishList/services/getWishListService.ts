import { api } from '../../../common/helpers/apiHelper';
import { QueryRoutes, FetchMethod } from '../../../common/enums';

const getWishListService = async () => {
  const response = await api({
    endpoint: QueryRoutes.WISH,
    method: FetchMethod.GET,
    request: ''
  });
  return response.json();
};

export {getWishListService };
