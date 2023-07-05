//UserType
export type UserType = {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    repeatPassword?: string;
    address: string;
};
export type UserNameType = {
    firstName: string;
    lastName: string;
    address: string;
};

export type GetUserRequestType = UserType & {
    id: number;
};

export type UpdateUserRequestType = {
    id: number;
    body: UserType;
};

