export interface User {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    login: string;
    password: string;
    authorizationToken: string;
    role: {
      name: string;
    };
}