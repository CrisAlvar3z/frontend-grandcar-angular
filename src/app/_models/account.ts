import { Role } from './role';
import { Direccion } from './direccion';

export class Account {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    jwtToken?: string;
    domicilio: object;
}