# Bandada Tutorial

This is an example of a project using Bandada and Semaphore completely off-chain.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Live App

The app has the code to use off-chain groups and credential off-chain groups. The `main` branch is using an off-chain group and the `credential-group-app` branch is using a credential group. 

Using an **off-chain group** live app url:
https://bandada-semaphore-demo.vercel.app/

Using a **credential off-chain group** live app url:
https://credential-semaphore-demo.vercel.app/

## Architecture of the app

![Bandada-Semaphore Off-chain App Architecture](https://github.com/vplasencia/bandada-semaphore-demo/assets/52170174/b8d43564-01b3-4b7c-ae56-6efb1c5a8773)

## Run Locally

### Clone the Repository

```bash
git clone https://github.com/vplasencia/bandada-semaphore-demo.git
```

### Install dependencies

```bash
yarn
```

### Add environment variables

Copy the `env.development.local.example` file content in a `.env.development.local` file:

```bash
cp env.development.local.example .env.development.local
```

and add your environment variables: group id and group api key (if the group is not a credential group).

### Run de development server

```bash
yarn dev
```

Open [http://localhost:3003](http://localhost:3000) with your browser to see the result.

### Code quality and formatting

Run [ESLint](https://eslint.org/) to analyze the code and catch bugs:

```bash
yarn lint
```

Run [Prettier](https://prettier.io/) to check formatting rules:

```bash
yarn prettier
```

Or to automatically format the code:

```bash
yarn prettier:write
```

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
