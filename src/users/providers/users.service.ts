import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { GetUsersParamDto } from '../dtos/get-users-param.dto'
import { AuthService } from 'src/auth/providers/auth.service'

@Injectable()
export class UsersService {
  constructor(
    // Injecting Auth Service
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth()
    console.log(isAuth)
    return [
      { firstName: 'John Doe', email: 'john@doe.com' },
      { firstName: 'Alice Doe', email: 'alice@doe.com' },
    ]
  }

  public findOneById(id: string) {
    return { id: 1234, firstName: 'Alice Doe', email: 'alice@doe.com' }
  }
}
