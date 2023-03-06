import { TodosService } from './todos.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from './todo.model';
import { ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('todos')
@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) { }

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get('/user/:id')
  @ApiParam({ name: 'user_id' })
  findByUser(@Param() params): Promise<Todo[]> {
    return this.todoService.findByUser(params.user_id);
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  findOne(@Param() params): Promise<Todo> {
    return this.todoService.findOne(params.id);
  }

  @Post()
  create(@Body() todo: Todo): Promise<Todo> {
    return this.todoService.create(todo);
  }

  @Put(':id')
  @ApiParam({ name: 'id' })
  update(@Param() params, @Body() todo: Todo): Promise<Todo> {
    return this.todoService.update(params.id, todo);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  remove(@Param() params): Promise<void> {
    return this.todoService.remove(params.id);
  }
}
