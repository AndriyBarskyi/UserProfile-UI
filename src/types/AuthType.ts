export type SignInRequestType = {
  email: string;
  password: string;
};

export type SignUpRequestType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  // repeatPassword: string;
};

export type AuthType = {
  token: string | null;
  isAuth: boolean;
};

export type SignErrorsType = {
  message: string;
  errors?: {
    email?: string[];
    password?: string[];
  };
};
