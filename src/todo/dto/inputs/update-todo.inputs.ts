import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int, { description: 'Id of the todo' })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  id: number;

  @Field(() => String, {
    description: 'Description of the todo',
    nullable: true,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(30)
  description: string;

  @Field(() => Boolean, { description: 'Is the todo done?', nullable: true })
  @IsNotEmpty()
  @IsOptional()
  @IsBoolean()
  done: boolean;
}
