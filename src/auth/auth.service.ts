import { Injectable } from '@nestjs/common';
import { UserService } from './../user/user.service';
import { User } from './../user/user.entity';
import bcrypt = require('bcrypt');
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(name: string, pass: string): Promise<any> {
        const user: User = await this.userService.findOne(name);
        if (user && bcrypt.compareSync(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: User) {
        const payload = { name: user.name, id: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
