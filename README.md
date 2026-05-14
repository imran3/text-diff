
# 📝 Text-diff

A minimal, high-performance side-by-side text comparison tool built with **React**, **Tailwind CSS**, and **TypeScript**. Designed to provide a GitHub-like code review experience for any text input.

## ✨ Features

* **Side-by-Side Comparison:** Clear visual distinction between original and modified text.
* **Word-Level Highlighting:** Intelligently highlights specific changes within lines, not just the lines themselves.
* **Modern UI/UX:** Clean, minimal dashboard aesthetic with a focus on readability.
* **Responsive Layout:** Edge-to-edge design with sensible horizontal padding and viewport-aware inputs.
* **Developer Friendly:** Fully typed with TypeScript and enforced by a strict linting/formatting pipeline.

## 🚀 Tech Stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Diff Engine:** `react-diff-viewer-continued`
* **Quality Control:** ESLint 10, Prettier, Husky, and Lint-Staged.

---

## 🛠️ Local Development

### Prerequisites

* **Node.js:** v20.12.0 or higher (Required for `styleText` support in dev tools)
* **npm:** v9 or higher

### Installation

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

2.  **Build for production:**
    ```bash
    npm run build
    ```

---

## 🧹 Quality Control

This project uses a strict pre-commit pipeline to ensure code quality.

* **Formatting:** Prettier runs automatically on save (if configured in VS Code) or via `npm run format`.
* **Linting:** ESLint 10 is used to catch logic errors and enforce Tailwind class ordering.
* **Git Hooks:** Husky will prevent commits if the linter finds errors or if formatting is inconsistent.

### Manual Commands
```bash
# Format with prettier
npm run fmt

# Run the linter
npm run lint

# Automatically fix linting and formatting issues
npm run lint:fix