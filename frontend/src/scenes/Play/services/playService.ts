import { api } from '../../../common/helpers/apiHelper';
import { QueryRoutes, FetchMethod } from '../../../common/enums';

const play = () => api({
  endpoint: QueryRoutes.SHUFFLE,
  method: FetchMethod.POST,
  request: ''
});

export { play };
