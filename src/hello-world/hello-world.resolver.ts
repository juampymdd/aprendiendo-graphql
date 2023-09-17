import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, { description: 'Hello World!', name: 'hello' })
  helloWorld(): string {
    return 'Hello World!';
  }

  @Query(() => Float, { name: 'randomNumber', description: 'Random number' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }
  @Query(() => Int, {
    name: 'fromZeroTo',
    description: 'Random number from 0 to the specified number',
  })
  randomFromZeroTo(
    @Args('to', { nullable: true, type: () => Int }) to = 6,
  ): number {
    return Math.floor(Math.random() * (to + 1));
  }
}
