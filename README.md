```
 /\_/\  
( o.o ) 
 > ^ <
```

# TypeScript Playground

A TypeScript playground for practicing and experimenting with TypeScript features, type assertions, and runtime testing.

## Features

- 🎯 **Type Checking**: Compile-time type assertions using `asserttt`
- ✅ **Runtime Testing**: Node.js `assert` for runtime validation
- 🎨 **Code Formatting**: Biome for fast linting and formatting
- 🐛 **Debugging**: VS Code debugger support for any TypeScript file
- 📝 **Type Safety**: Strict TypeScript configuration

## Getting Started

### Installation

```bash
pnpm install
```

### Available Scripts

- `pnpm run typecheck` - Type check all files
- `pnpm run typecheck:watch` - Watch mode for type checking
- `pnpm run format` - Format code with Biome
- `pnpm run lint` - Lint code with Biome
- `pnpm run check` - Run both linting and formatting checks

### Running Files

Use the VS Code debugger with the "Debug Current TS File" configuration to run any `.ts` file in the `src` folder.

## Project Structure

```
src/
├── index.ts              # Main playground file
└── types/
    └── assert-types.ts   # Type assertion examples
```

## Type Assertions

This playground uses `asserttt` for compile-time type checking:

```typescript
import { type Assert, type Equal } from 'asserttt';

type _ = [
  Assert<Equal<Pair<'a'>, ['a', 'a']>>
];
```

## Runtime Assertions

Use Node.js `assert` for runtime validation:

```typescript
import assert from "assert";

assert.strictEqual(result, expected);
```

## Author

behzad.am@gmail.com

## License

MIT

