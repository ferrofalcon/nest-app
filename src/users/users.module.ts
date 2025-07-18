import { forwardRef, Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './providers/users.service'
import { AuthModule } from 'src/auth/auth.module'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [forwardRef(() => AuthModule)], // Import AuthModule to use AuthService
  exports: [UsersService], // Export UsersService to be used in other modules
})
export class UsersModule {}
