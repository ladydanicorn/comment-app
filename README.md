
A simple React application that allows users to post comments with a title and body. Comments are saved to localStorage. The app is fully tested with Jest and automatically deployed to Vercel via GitHub Actions after successful test completion.

## Features

- Add comments with a title and body
- Store comments in localStorage
- Written in React with TypeScript
- Tested with Jest and React Testing Library
- CI/CD pipeline using GitHub Actions and Vercel

## Tech Stack

- React (TypeScript)
- Jest
- React Testing Library
- GitHub Actions
- Vercel

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ladydanicorn/comment-app
cd comment-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

### 4. Run tests

```bash
npm test
```

## CI/CD Pipeline

This project uses GitHub Actions to run tests and deploy to Vercel. The deployment only triggers if all tests pass.

Workflow location:
.github/workflows/deploy.yml

### Required GitHub Secrets

The following secrets must be set in your GitHub repository under Settings > Secrets and variables > Actions:

- VERCEL_TOKEN: Your personal Vercel access token
- ORG_ID: Your Vercel organization or team ID
- PROJECT_ID: Your Vercel project ID

## Live Site

You can view the deployed app at:

comment-ibehbd23a-danielles-projects-0ea5cc10.vercel.app

(Replace with your actual deployment URL)

## License

This project is licensed under the MIT License.