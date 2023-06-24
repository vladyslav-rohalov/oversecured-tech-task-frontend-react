import { notifyError } from './notify';

const errorMessageList = {
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Forbidden',
  404: 'Not found',
  409: 'Conflict, email in use',
};

export const httpError = (status, message = errorMessageList[status]) => {
  return notifyError(message);
};
