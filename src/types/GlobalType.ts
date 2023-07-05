export type BackEndErrorsType = {
  message: string;
  errors: {
    [key: string]: BackEndErrorType;
  };
};

export type BackEndErrorType = string[] | undefined;

export type MessageResponseType = {
  message: string;
};
