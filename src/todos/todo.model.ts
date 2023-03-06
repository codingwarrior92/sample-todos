import { Column, Table, Model } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'

@Table
export class Todo extends Model {
  @Column
  @ApiProperty()
  title: string
  @Column
  @ApiProperty()
  description: string
  @Column
  @ApiProperty()
  user_id: number
}
