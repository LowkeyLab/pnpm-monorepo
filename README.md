# PNPM Monorepo

This is a monorepo managed with [PNPM](https://pnpm.io/) containing multiple web applications and projects.

## Repository Structure

This monorepo contains the following packages:

- **website**: A personal website for Tim Tran, built with Astro, Tailwind CSS, and DaisyUI.
- **elections-tracker**: An application for tracking election information, built with Astro.

## Prerequisites

- [Node.js](https://nodejs.org/) v22
- [PNPM](https://pnpm.io/) v10.7.1

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pnpm-monorepo.git
   cd pnpm-monorepo
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## Usage

### Website

To work with the website package:

```bash
# Development server
cd website
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint

# Start production server
pnpm start
```

### Elections Tracker

To work with the elections-tracker package:

```bash
# Development server
cd elections-tracker
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Technologies

- **Package Management**: PNPM Workspaces
- **Website**:
  - [Astro](https://astro.build/) - Web framework
  - [Tailwind CSS](https://tailwindcss.com/) - CSS framework
  - [DaisyUI](https://daisyui.com/) - Tailwind CSS component library
  - [Hono](https://hono.dev/) - Web framework for APIs
- **Elections Tracker**:
  - [Astro](https://astro.build/) - Web framework

## License

This project is licensed under the [LGPL-3.0-or-later](LICENSE).