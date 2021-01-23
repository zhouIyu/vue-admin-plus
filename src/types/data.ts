type valid = 0 | 1;

interface BaseData {
    id?: string;
    _id?: string;
    create_time?: Date;
    update_time?: Date;
    valid?: valid;
}

export interface Role extends BaseData {
    name: string;
    description: string;
}

export interface BaseUser {
    username: string;
    password: string;
}

export interface UserCreate extends BaseUser {
    role: string;
}

export interface UserInfo extends BaseData, BaseUser {
    username: string;
    password: string;
    role: Role;
}
