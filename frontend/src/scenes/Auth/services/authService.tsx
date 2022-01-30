import { api } from '../../../common/helpers/apiHelper';
import { IRegistrationData } from '../../../common/interfaces';
import { QueryRoutes, FetchMethod } from '../../../common/enums';

const registration = async (registrationData: IRegistrationData) => {
  const response = await api({
    endpoint: QueryRoutes.REGISTER,
    method: FetchMethod.POST,
    request: registrationData
  });
  return response.json();
};

export { registration };
