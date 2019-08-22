export class LoginDTO {
    name: string;
    password: string;
}

// tslint:disable-next-line: max-classes-per-file
export class SignUpDTO extends LoginDTO {
    age: number;
}
