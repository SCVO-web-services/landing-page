This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


- - -

## Requirements


To run this project, you will need:

- [Node.js](https://nodejs.org/en/) version 21.5.0 or higher.
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/).

After cloning the project, you will need to install the project's dependencies. Navigate to the project's directory and run the following command:

### Automatic installation
You need to run.
```bash
npm ci
```
This ensures that you use the exact dependencies.

### Manual installation

```bash
npm install
```

This project uses the following key dependencies:

- [Next.js](https://nextjs.org/) - The React Framework for Production.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React DOM](https://reactjs.org/docs/react-dom.html) - Serves as the entry point to the DOM and server renderers for React.
- [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- [Prettier](https://prettier.io/) - An opinionated code formatter.
- [Jest](https://jestjs.io/) - A delightful JavaScript Testing Framework with a focus on simplicity.

To ensure code quality, this project uses [ESLint](https://eslint.org/) for linting and [Prettier](https://prettier.io/) for code formatting. Make sure to run the linter and formatter before committing:

```bash
npm run lint
npm run pre-commit
```

To run the tests, use the following command:

```bash
npm test
```
- - -
## Getting Started


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
- - -
## Contributing

### How to Submit a Contribution

1. Create a branch. Name it properly with "Git branching Naming Convention" standarts if possible. e.g.:<br>
`feat/name`: A new feature <br>
`fix/name`: A bug fix <br>
`dox/name`: Changes to documentation<br>
`style/name`: Changes that do no affec code (formatting)<br>
`refactor/name`: For any refactoring.<br>
`test/`: Adding missing test or correcting existing tests<br>
2. Make your changes in your branch. Use [simplified commit convention](https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4)
3. Test your changes to ensure they don't break anything.
4. Submit a pull request with your changes.

### How to accept contributions.
All code must be reviewed and accepted by atleast 2 participants before merging in `master`
- - -
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
