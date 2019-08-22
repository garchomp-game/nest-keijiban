import { User } from './user.entity';
import { SignUpDTO } from './user.dto';
import { Controller, Body, Post, Get } from '@nestjs/common';
import { UserControllerInterface } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController implements UserControllerInterface {
    constructor(private readonly userService: UserService) {}

    @Post('signup')
    public signUp(@Body() req: SignUpDTO): Promise<User> {
        return this.userService.signUp(req.name, req.password, req.age);
    }

    @Get('findAll')
    public findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}
