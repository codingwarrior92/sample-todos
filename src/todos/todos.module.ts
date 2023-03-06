import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from './todo.model';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports: [SequelizeModule.forFeature([Todo])],
  providers: [TodosService],
  controllers: [TodosController],
  exports: [SequelizeModule],
})
export class TodosModule {}
