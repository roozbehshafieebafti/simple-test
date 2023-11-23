import { apiCall } from "../APICall";
import { Info, User } from "./Types";

export const getUser = async () => {
  return (await apiCall<{ info: Info; results: User[] }>("/")).data;
};
