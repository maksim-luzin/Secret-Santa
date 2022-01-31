import { api } from "../../../common/helpers/apiHelper";
import { QueryRoutes, FetchMethod } from "../../../common/enums";

const playService = () =>
  api({
    endpoint: QueryRoutes.SHUFFLE,
    method: FetchMethod.POST,
    request: "",
  });

export { playService };
