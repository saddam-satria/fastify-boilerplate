import IResponse from './interfaces/Response';

const getResponse = <T>(message: string, statusCode: number, data: T): IResponse<T> => {
  return {
    data,
    message,
    statusCode,
  };
};

export default getResponse;
