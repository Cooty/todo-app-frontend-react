# Frontend for a simple ToDo app

Project is based on [Create React App (v4)](https://github.com/facebook/create-react-app), configured to use [Typescript](https://www.typescriptlang.org/). It's a single-page-application, rendered on the client-side fully in JavaScript ([React](https://reactjs.org/)).

Styling is done with a CSS-in-JS approach via [Emotion](https://emotion.sh/docs/introduction), using [`@emotion/styled`](https://emotion.sh/docs/styled) which is similar to Styled Components.

## 🛠️ Development

### 🐋 In Docker

The application has a dockerized, portable dev environment, to run the code on your machine all you need is to have [Docker](https://www.docker.com/) installed. Docker setup is mostly based on [this article](https://mherman.org/blog/dockerizing-a-react-app/).

run

```
make build-dev
```

to create the development image. This command should create an image called `todo-app-frontend-react:dev` on your system.

now you can run it with 

```
make run-dev
```

The app should be available on `http://localhost:3001/` in your browser. Code changes should reflect immediately thanks to the Hot Module Reload (HMR) feature of Create React App.

If you wish to run the app on a **different port**, then you can do so by passing the `PORT` environment variable to the make command, like so:

```
make run-dev PORT=5050
```

Now the app should be available on `http://localhost:5050`

To tear down the dev environment, just exit the task running in your terminal (`Ctrl + C`) or find the container for the app (run `docker ps`), then look for the container in the list which is based on the `todo-app-frontend-react` image) and stop the container (`docker stop <ID|NAME>`)

### 💻 Running it directly on your computer

If you don't want to use Docker for development you can also run the app directly.

In this case you need to have [Node >= 10.16 and npm >= 5.6](https://nodejs.org/en/) installed.

- Install dependencies with `npm install`
- Run the project in development mode with the script found in `package.json`, this is `npm run start`

## 🏭 Production

The app is currently deployed to [Github pages](https://docs.github.com/en/pages) using the Deploy to [Github Pages action](https://github.com/marketplace/actions/deploy-to-github-pages).

The production URL is: https://cooty.github.io/todo-app-frontend-react/

**Important!** The production-URL needs to be passed to CRA as the value of the `PUBLIC_URL`. Because it's hosted in a sub-directory, all script references will throw a 404 response, because the browser will try to load them from the base-URL. We use `env.production` file to pass this info at build time.

The deployed code the to the server resides in the `release` branch. Once you merge into `master` the github action runs automatically, the build artifacts get copied the `release` branch and they get synced with the live environment.

You can check out the build and deployment process in `.github/workflows/main.yml`.

### 🐋 Production build with Docker

There's also a dockerized version of the production environment.

There's a production image defined in `Docker.prod`. You can build this image by running:

```
make build-prod
```

**Note!** In this case we don't need to pass the Github pages production URL to CRA when building the app, so in the `Dockerfile.prod` we set `PUBLIC_URL=/`.

To run a container based on this image:

```
make run-prod
```

The production version of the app should show up on port `3001`. If you want to map this to a different port then just pass the `PORT` variable to the make command:

```
make run-prod PORT=5050
```
