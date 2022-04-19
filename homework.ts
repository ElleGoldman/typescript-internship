// EX 1 -----------------------------------

interface Entity {
  readonly id?: string;
  readonly name?: string;
  readonly age?: number;
  readonly ethnicity?: string;
}

// Given following interface do the following operations:
// Remove - 1. readonly, 2. optional type and 3. id property & ethnicity property
// do this as 3 separate mutation types
// create a mapper function that maps response type of all keys to boolean

// expected:
// type newType = A<B<C<D<Type>>>>
/*
  {
    name: boolean;
    age: boolean;
  }
 */

type Writable<T> = { -readonly [P in keyof T]: T[P] };
type Mandatory<T> = Required<T>
type WithoutIdAndEthnicity<T> = Omit<T, "id" | "ethnicity">;
type OnlyBooleans<T> = { [P in keyof T]: boolean };

type ModifiedEntity = Writable<Mandatory<WithoutIdAndEthnicity<OnlyBooleans<Entity>>>>

const testEntity: ModifiedEntity = {
  name: true,
  age: false,
}

// EX 2 ------------------------------------------------
/*
/*HW
1. Create an interface Id that has property id of type number
2. Create an interface Name that has property name of type string
3. Create a new type IdOrName and pass in a generic type
* If passed in type extends Id, IdOrName - will be of type number
* Else If passed in type extends Name, IdOrName - will be of type string
* Else passed in type extends Anything Else, IdOrName - will be of type {age: boolean}
 */

interface Id {
  id: number;
}
interface Name {
  name: string;
}
type IdOrName<T> = T extends Id ? number : T extends Name ? string : { age: boolean }

const testEx2: IdOrName<{}> = { age: true } 


// EX 3 ------------------------------------------------
/*
 Write a detailed explanation with images || steps || words how ex 5 withLet function works and why did we get the expected result
 */

 // Hoisting, scope

// EX 4 ------------------------------------------------
//Having two interfaces:
/*interface User {
  id: number;
  name: string;
  age: number;
}

interface Car {
  id: number;
  color: string;
  numberOfDoors: number;
}
Replicate an API response that will have the following structure:
{
  data: {
    [any keys of string type]: Generic type;
    pagination: number;
  }
  errors: string[]
}
*/

interface User {
  id: number;
  name: string;
  age: number;
}

interface Car {
  id: number;
  color: string;
  numberOfDoors: number;
}

type ResponseData<T> = {
  data: {
    [key: string]: T | number;
    pagination: number;
  }
  errors: Array<string>
}

const car: ResponseData<Car> = {
  data: {
    car: {
      id: 1,
      color: 'white',
      numberOfDoors: 5
    },
    pagination: 1
  },
  errors: ['Loading car error']
}

// EX 5 ------------------------------
// Write a class decorator, method decorator and parameter decorator functions for any Class the logic inside each decorator is up to you e.g.:
/*
@ClassDecorator
class SomeClass {

  @PropertyDecorator
  property1: string;

  @MethodDecorator(PASS_SOME_ENUM)
  someMethod(@ParameterDecorator someParameter: number) {
    // If PASS_SOME_ENUM value === 0 => Print parameter decorator value + some text from @ParameterDecorator
    // Else Print parameter decorator value * 50 + some text from @ParameterDecorator
    console.log('this is our message');
  }
}
 */
