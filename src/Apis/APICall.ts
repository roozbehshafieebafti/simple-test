import axios, { AxiosRequestConfig } from "axios";

const BASE_URL: string | undefined = process.env.REACT_APP_BASE_URL;

type AxiosResponse<Response> = {
  data: Response;
  headers: unknown;
};

export const apiCall = async <Response>(
  endpoint: string,
  method: AxiosRequestConfig["method"] = "GET",
  data: AxiosRequestConfig["data"] = null,
  headers: AxiosRequestConfig["headers"] = {}
): Promise<AxiosResponse<Response>> => {
  const url = `${BASE_URL}${endpoint}`;
  const config: AxiosRequestConfig = {
    method,
    url,
    data,
    headers,
  };
  const response = await axios(config);
  return {
    data: response.data,
    headers: response.headers,
  };
};
