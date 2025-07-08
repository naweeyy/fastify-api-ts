# Fastify API TypeScript Starter

🚀 A modern and performant starter for building REST APIs with [Fastify](https://fastify.dev/) and TypeScript.

## ✨ Features

- ⚡ **Fastify** - Ultra-fast web framework
- 🔷 **TypeScript** - Static typing and better DX
- 🔧 **Hot Reload** - Automatic reload in development
- 📁 **Modular structure** - Clean organization of plugins and routes
- 🛡️ **Type Safety** - Custom TypeScript declarations

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

```bash
# Clone the project
git clone <your-repo>
cd fastify-api-ts

# Install dependencies
npm install
```

### Development

```bash
# Run in development mode (hot reload)
npm run dev
```

The API will be available at [http://localhost:8888](http://localhost:8888)

### Production

```bash
# Build the project
npm run build

# Run in production
npm start
```

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the server in development mode with hot reload |
| `npm run build` | Compiles TypeScript to JavaScript in `/dist` |
| `npm start` | Starts the server in production mode |
| `npm test` | Runs tests (to be configured) |

## 📁 Project Structure

```
src/
├── app.ts              # Fastify application configuration
├── server.ts           # Server entry point
├── plugins/            # Custom Fastify plugins
│   ├── sensible.ts     # Plugin for HTTP errors
│   └── support.ts      # Global utilities
├── routes/             # Route definitions
│   ├── root.ts         # Root route
│   └── example/        # Example routes
└── types/              # TypeScript declarations
    └── fastify.d.ts    # Fastify type extensions
```

## 🔌 Adding New Routes

1. Create a file in `src/routes/`
2. Export a Fastify plugin function:

```typescript
import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/hello', async (request, reply) => {
    return { message: 'Hello World!' };
  });
}
```

3. Routes are automatically loaded by Fastify

## 🛠️ Customization

### Plugins

Add your plugins in `src/plugins/` and register them in `src/app.ts`.

### Environment Variables

Create a `.env` file at the root:

```env
PORT=8888
NODE_ENV=development
```

## 📚 Resources

- [Fastify Documentation](https://fastify.dev/docs/latest/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Fastify Plugins](https://github.com/fastify/awesome-fastify)

## 📝 License

[MIT](./LICENSE)
