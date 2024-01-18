+++
title = 'Bun Is (Really) Fast'
date = 2024-01-17T01:45:35-06:00
draft = false
+++

# Introduction

Bun created quite a buzz late last year when v1.0 was released. Unlike NodeJS which uses the V8 engine, Bun uses the JavaScriptCore framework which was created by Apple. The framework is written in C++ and is used in Safari and other Apple products. It's an all in-one bundler, package manager and runtime, potentially replacing NodeJS. 

Here's a graph breaking down the performance benchmarks of Bun vs Node vs Deno:

[![Bun vs Node vs Deno](/images/bunstats.png)](https://bun.dev)

As you can see Bun  surpasses Node.js and Deno in handling concurrent connections, achieving 110,000 requests per second with 10 concurrent connections, compared to Node.js's 60,000 and Deno's 67,000​.

# Getting Started with Bun

You can see in the [Bun documentation](https://bun.dev) that it's easy to get started. You can install it with a single command:

```bash
    npm install -g bun # the last `npm` command you'll ever need
```

or if you're using Homebrew:

```bash
    brew tap oven-sh/bun # for macOS and Linux
    brew install bun
```

Also if you're a TypeScript user, you can install the type definitions:

```bash
    bun add -d @types/bun
```

Now that you have Bun installed, you can use the CLI to execute any JavaScript/TypeScript file, package.json and other executable files.

```bash
    bun run index.js # run a JavaScript file
    bun run index.ts # run a TypeScript file
    bun run package.json # run a package.json file
    bun run # run the main file in package.json
```

Let's create our first Bun project. We'll create a new directory and initialize it with Bun.

```bash
    mkdir bun-project
    cd bun-project
    bun init
```

You can now run the project with `bun run` or `bun run index.js`.

Let's add the package "figlet" to our project. It's a package that converts text to ASCII art. We'll add it to our project with the `bun add` command.

```bash
    bun add figlet
    bun add -d @types/figlet # TypeScript users only
```

Now in our index.ts file, we'll add the following code:

```typescript
import figlet from "figlet";

const server = Bun.serve({
  fetch() {
    const body = figlet.textSync("Hot Buns!");
    return new Response(body);
    return new Response("Hot Buns!");
  },
  port: 3000,
});
```

Now whenever we run `bun run index.ts`, we'll see the following output:

```bash
    $ bun run index.ts
    Bun is serving at http://localhost:3000
```

```bash
  _   _       _     ____                  _
 | | | | ___ | |_  | __ ) _   _ _ __  ___| |
 | |_| |/ _ \| __| |  _ \| | | | '_ \/ __| |
 |  _  | (_) | |_  | |_) | |_| | | | \__ \_|
 |_| |_|\___/ \__| |____/ \__,_|_| |_|___(_)

```

You can clone this project from [GitHub](https://github.com/mariasaavedra/bun)
