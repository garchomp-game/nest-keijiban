import { User } from './user.entity';
import { SignUpDTO } from './user.dto';

export interface UserServiceInterface {
    findOne(name: string): Promise<User | undefined>;
    findAll(): Promise<User[] | undefined>;
    signUp(name: string, password: string, age: number): Promise<User>;
}

export interface UserControllerInterface {
    signUp(req: SignUpDTO): Promise<User>;
}
