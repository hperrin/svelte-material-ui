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

# This will take a while
npm i
```

Now you're set up. If there are package-lock.json files in the package directories after setting up, feel free to delete them. Run this to start up the dev site.

```
cd packages/site
npm run dev
```

Once that starts, you should be able to see the site at http://127.0.0.1:5173/ and the site will refresh automatically when you make a change.

## Making Changes to Packages

If your changes apply to a package rather than the site, you will have to go into whichever package you're working on and run `npm run build` before you'll see the change.

## Committing Changes

SMUI uses Prettier to format code. You should use Prettier after you've edited a file, before you commit it. You can set up your editor to run Prettier automatically when you save a file. Also, don't forget the Svelte Prettier plugin.

SMUI uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages, and Husky will lint your commit messages when you commit. Please follow the conventional commits format for you commit messages. Please also provide meaningful, informative messages.

Personally, I don't scope my commit messages by package. It's fine if you do, but you'll be the odd commit out. Here are the types of commits and how I use them:

- `chore:` - A change that doesn't have any impact on documentation, the built code/styles, or the API. (Things like dependency updates, npm script changes, etc.)
- `docs:` - A change to the READMEs, the demo site, or type descriptions.
- `style:` - A change to the code that doesn't affect the code at all. (Code style fixes, formatting.)
- `refactor:` - A change to the code that doesn't affect the functionality of the code or the API at all.
- `fix:` - A change to the code that fixes an issue without changing the API.
- `feat:` - A change to the code that changes the API. Also any dependency updates that change the upstream API, like updating to a new MDC-Web version.

Remember to include `BREAKING CHANGE:` in the commit message footer if it changes the API in a backward incompatible way.

Once you've made your change, feel free to open a pull request.

Happy coding, and thanks again for contributing!
