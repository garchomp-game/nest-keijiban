import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserServiceInterface } from './user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt = require('bcrypt');

@Injectable()
export class UserService implements UserServiceInterface {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findOne(name: string): Promise<User | undefined> {
        return this.userRepository.findOne({ name });
    }

    findAll(): Promise<User[] | undefined> {
        return this.userRepository.find();
    }

    signUp(name: string, password: string, age: number): Promise<User> {
        const user = new User();
        user.name = name;
        user.password = bcrypt.hashSync(password, 15);
        user.age = age;
        return this.userRepository.save(user);
    }

}
