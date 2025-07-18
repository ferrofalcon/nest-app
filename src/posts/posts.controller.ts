import { Controller, Get, Param } from '@nestjs/common'
import { PostsService } from './providers/posts.service'

@Controller('posts')
export class PostsController {
  constructor(
    // Injecting Posts Service
    private readonly postsService: PostsService,
  ) {}

  @Get('/{:userId}')
  getAllPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId)
  }
}
