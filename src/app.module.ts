import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BoardModule } from './board/board.module';
import { ChatModule } from './chat/chat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [UserModule, AuthModule, BoardModule, ChatModule,
    TypeOrmModule.forRoot(
      {
        type: 'sqlite',
        database: 'db/test.db',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
