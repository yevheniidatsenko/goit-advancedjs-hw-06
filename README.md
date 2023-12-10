## TypeScript Basic Types and Generics Exercises

This document contains exercises to help you practice working with basic types and generics in TypeScript.

**Basic Types**

These exercises focus on using basic types like `number`, `string`, `boolean`, `null`, `undefined`, `unknown`, `any`, tuples, enums, and type unions.

**Tasks:**

1. **Convert JavaScript code to TypeScript:** Convert the provided JavaScript code to TypeScript, specifying appropriate types for all variables.
2. **Assign a type to a variable of any type:** Define a variable that can store values of any type.
3. **Access unknown type safely:** Assign an unknown type variable to another variable of a known type safely.
4. **Create a tuple with specific types:** Define a tuple that ensures the first element is a string and the second element is a number.
5. **Define variables with union and literal types:**
   - Create a variable that can accept a string or a number.
   - Create a variable that can only accept one of two specific string values.
6. **Specify types for function arguments and return values:** Add type information to function arguments and return values for clarity and safety.
7. **Create a function based on a day of the week enum:** Define a function that takes a day of the week from your enum and returns whether it's a weekday or weekend.
8. **Create a union type for gender:** Define a union type that can represent "male" or "female" gender values.
9. **Create a type for similar objects:** Create a new type that can represent two provided objects with similar properties and structures.

**Generics**

These exercises guide you through using generics in functions, interfaces, classes, and utilities like `Pick` and `Record`.

**Tasks:**

1. **Create a function with a generic return type:** Define a function that returns a promise with a specified generic type.
2. **Compare objects with generics and Pick:** Use generics and `Pick` to compare two objects with fields of the specified generic type.
3. **Merge objects using generics:** Create a generic function that merges two objects of any type.
4. **Fix type errors in classes with generics and interfaces:** Use generics and interfaces to address type errors in provided classes.
5. **Implement a KeyValuePair interface with generics:** Define an interface `KeyValuePair` that uses generics to accept any key and value types.
6. **Fix form update function type:** Correct the type of a function argument to allow partial updates of a user object.
7. **Create a role description object using Record:** Implement a `RoleDescription` object using `Record` to map user roles to their descriptions.
8. **Exclude specific fields from a type with generics:** Create a new type that excludes a specific field ("errors") from an existing type.
