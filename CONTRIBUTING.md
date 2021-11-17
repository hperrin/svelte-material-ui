# Contributing

Thank you for contributing!

Svelte Material UI is a mature library, but is always looking for ways to improve. If you'd like to contribute, there are some guidelines you should know. First, let's get you started.

## Setting up Your Dev Environment

The first step is to fork the repo. Once you've got your own fork, check it out locally.

```
git clone git@github.com:yourusername/svelte-material-ui.git smui
```

Now let's get the repo set up for development.

```
cd smui

npm i

# This will take a while
npm run bootstrap
```

Now you're set up. If there are package-lock.json files updated after setting up, feel free to reset those changes. Run this to start up the dev site.

```
cd packages/site
npm run dev
```

Once that starts, you should be able to see the site at http://localhost:3000/ and the site will refresh automatically when you make a change. You will have to go into whichever package you're working on and run `npm run build` before you'll see the change.

## Commiting Changes

SMUI uses Prettier to format code. You should use Prettier after you've edited a file before you commit it. You can set up your editor to run Prettier automatically when you save a file. Also, don't forget the Svelte Prettier plugin.

SMUI uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages, and Husky will lint your commit messages when you commit. Please follow the conventional commits format for you commit messages. Please also provide meaningful, informative messages.

Once you've made your change, feel free to open a pull request.

Happy coding, and thanks again for contributing!
