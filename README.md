# mariasaavedra.github.io

## (v0.1)

A minimal, modern static site generator + micro-UI system built on **Bun**, **Web Components**, **modern CSS**, and **URLSearchParams as the canonical client state model**.  
No React, no JSX, no framework overhead — just the platform.

## Goals

- Learn and explore low-level web architecture in 2025.
- Use native browser primitives instead of abstraction-heavy frameworks.
- Build a static blog/notes/experiments site that feels modern, lightweight, and transparent.

## Stack

- **Bun** — dev server + build script.
- **Web Components** — reusable UI shells and interactive islands.
- **Modern CSS** — container queries, `:has`, subgrid, nesting, `@layer`, `text-wrap: balance`.
- **URL + URLSearchParams** — the _only_ client-visible state mechanism.
- Optional **HTML `<template>`** usage (tbd).

## Project Layout

TBD.

## Principles

- Pages are fully static by default.
- Web Components progressively enhance layouts and lists.
- All UI state (filters, view modes, experiment configs) lives in the URL.
- No global stores, no virtual DOM, no SPA routing.
