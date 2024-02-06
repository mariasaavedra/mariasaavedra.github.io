+++
title = 'Creating a Desktop App With Rust and React'
date = 2024-02-06T13:13:29-06:00
draft = true
+++

We're going to leverage Tauri to create a desktop app with Rust and React. Tauri is a toolkit that allows you to build desktop apps with web technologies. It's a great way to leverage your existing web development skills to create desktop apps.

## Prerequisites

Before we get started, you'll need to have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [Rust](https://www.rust-lang.org/tools/install)
- [Tauri CLI](https://tauri.studio/en/docs/getting-started/installation)
- [Bun](https://bun.sh/) (or any other package manager)

## Getting Started

Here is the command to quick start a new Tauri project:

```bash
cargo install create-tauri-app --locked
cargo create-tauri-app
```

You will be prompted to select a template. For this article, we will be using React and Tailwind for the frontend. 

The application I created is a productivity app that allows you whitelist or blacklist applications on your computer. This is a great way to stay focused and avoid distractions.

## Creating the Frontend
To rapidly create the frontend, I used MUI (Material-UI) and created a simple list to add applications to the whitelist or blacklist.

```bash
bun add @mui/material @emotion/react @emotion/styled
```
## The System Logic
Using the `tauri` crate to interact with the system. We will create a simple API to add and remove applications from the whitelist or blacklist.

You can invoke system logic from the React frontend using the `tauri.js` API. Here's an example of how you can add an application to the whitelist:

```javascript
import { invoke } from '@tauri-apps/api/tauri'
invoke('add_to_whitelist', { app: 'Slack' })
```

```rust
#[tauri::command]
fn add_to_whitelist(app: String) {
    // Add the app to the whitelist
}
```

# Source Code
You can find the full source code for this project [here](https://github.com/mariasaavedra/tauri-zen).


![Creating a Desktop App With Rust and React](/images/tauri.png)