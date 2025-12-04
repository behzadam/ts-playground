```
 /\_/\  
( o.o ) 
 > ^ <
```

# TypeScript Playground

A TypeScript playground for practicing and experimenting with TypeScript features, type assertions, and runtime testing.

## Features

- 🚀 **Native TypeScript Execution**: Run TypeScript directly with Node.js type stripping (Node.js v23.6.0+)
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

- `npm run play` - Run `src/playground.ts` with Node.js type stripping (watch mode)
- `npm run typecheck` - Type check all files
- `npm run typecheck:watch` - Watch mode for type checking
- `npm run format` - Format code with Biome
- `npm run lint` - Lint code with Biome
- `npm run check` - Run both linting and formatting checks

### Running Files

- **Quick Playground**: Edit `src/playground.ts` and run `npm run play` to see output automatically on save
- **VS Code Debugger**: Use the "Debug Current TS File" configuration to run any `.ts` file in the `src` folder

## Project Structure

```
src/
├── playground.ts         # Main playground file (run with npm run play)
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

