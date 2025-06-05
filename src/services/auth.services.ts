import { instance } from "./api";

export type UserCredentials = {
  username: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

const login = async (credentials: UserCredentials): Promise<LoginResponse> => {
  const res = await instance.post("/auth/login", credentials);
  console.log(res);
  return res.data;
};

export default login;
