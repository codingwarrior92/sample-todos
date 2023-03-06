import { Module, RequestMethod, MiddlewareConsumer } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { TodosController } from './todos/todos.controller'
import { TodosService } from './todos/todos.service'
import { TodosModule } from './todos/todos.module'
import { Todo } from './todos/todo.model'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      models: [Todo],
      autoLoadModels: true,
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    TodosModule,
  ],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})

export class AppModule {}
