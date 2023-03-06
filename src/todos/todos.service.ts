import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo) private todoModel: typeof Todo) { }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.findAll();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoModel.findOne({
      where: {
        id,
      },
    });
  }

  async findByUser(user_id: string): Promise<Todo[]> {
    return this.todoModel.findAll({
      where: {
        user_id
      }
    });
  }

  async create(todoData: any): Promise<Todo> {
    const todo = await this.todoModel.create(todoData);
    return todo;
  }

  async update(id: string, todoData: any): Promise<Todo> {
    const todo = await this.todoModel.findOne({ where: { id } });
    return await todo.update(todoData);
  }

  async remove(id: string): Promise<void> {
    await this.todoModel.destroy({ where: { id } });
  }
}
