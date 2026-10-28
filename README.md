# mariasaavedra.github.io

Personal blog, built with [Eleventy](https://www.11ty.dev/) (v3, ESM) using [MDX](https://mdxjs.com/) as the template language. Deployed to GitHub Pages at https://mariasaavedra.github.io/.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm start` | Dev server with live reload |
| `npm run build` | Build the site into `_site/` |

## Structure

```
eleventy.config.js     Eleventy config: MDX extension, posts collection, dirs
src/
  index.mdx            Home page, lists all posts
  css/style.css        Site styles (copied to _site/css as-is)
  posts/               One .mdx file per article
    posts.json         Directory data: layout, `posts` tag, series name
  _includes/
    base.11ty.js       Base HTML layout
    post.11ty.js       Article layout (wraps base)
.github/workflows/
  deploy.yml           Builds and deploys to GitHub Pages on push to main
```

## How MDX is wired up

`eleventy.config.js` registers an `mdx` template format. Each file is compiled with `@mdx-js/mdx` (with `remark-gfm` for tables) and rendered to static HTML with `react-dom/server`. There's no client-side React.

- Front matter and the data cascade are available inside MDX as `props`, e.g. `props.collections.posts`.
- Components can be defined inline in an `.mdx` file with `export function`.
- Layouts are plain JS templates (`*.11ty.js`) that receive the rendered MDX as `data.content`.

## Writing a post

Add a file to `src/posts/`, e.g. `src/posts/my-post.mdx`:

```mdx
---
title: My post title
subtitle: One-line summary.
topic: React Performance
order: 5
---

Post content in Markdown. JSX works too.
```

It's published at `/posts/my-post/`. `order` controls the order on the home page (ascending).

Gotchas: in MDX, a bare `{` or `<` in prose is parsed as JSX, so put code in backticks or escape the character.

## Deployment

Pushing to `main` triggers [deploy.yml](.github/workflows/deploy.yml), which runs `npm ci` and `npm run build` and publishes `_site/`.

One-time setup: in the repo, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
