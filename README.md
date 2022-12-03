# :package: TEMPLATE - NPM Package

## :notebook: Table of content

-   [What does it contains?](#what-does-it-contains)
-   [How can I start with it?](#how-can-i-use-it)
-   [Checklist](#checklist)
-   [Project structure](#project-structure)
-   [How can I use it?](#how-can-i-use-it)
    -   [NPM scripts](#npm-scripts)
        -   [`build`](#build)
        -   [`clean`](#clean)
        -   [`document`](#doc)
        -   [`prepare`](#prepare)
        -   [`prepublishOnly`](#prepublishonly)
        -   [`publishDocumentation`](#publishdocumentation)
        -   [`test`](#test)
    -   [GitHub workflows](#GitHub-workflows)
        -   [`publish-documentation`](#publish-documentation)
        -   [`publish`](#publish)
        -   [`test`](#test-1)
-   [Contribute](#contribute)
-   [License](#license)

## What does it contains?

This repository contains tools to start development of NPM packages with:

-   [TypeScript](https://www.typescriptlang.org) - Typed version of JavaScript.
-   [Gulp](https://gulpjs.com) - Tasks runner: used to perform build and documentation publication tasks.
-   [Jest](https://jestjs.io) - Tests framework.

## How can I start with it?

1. Download the latest version of the repo here.
2. Decompress the downloaded .zip.
3. Initialize a git repository in the folder with the following commands:

```bash
cd path/to/my/repo
git init
```

<div align="right">More information about <code>git init</code> on the <a href="https://git-scm.com/docs/git-init">official documentation</a>.</div>

4. Open the folder with you favorite IDE.
5. There you are, let's code!

## Checklist

This repo is made with many details I recommend you to check:

-   Had your package the correct manifest? (`package.json` ([see NPM documentation for more information](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)))
    -   Name (name and display name).
    -   Description.
    -   Version (more information about versioning semantic on [Semver](https://semver.org)).
    -   License (more information about licenses you can use on [choosealicense](https://choosealicense.com/))
    -   Author (name and/or url and/or email address).
    -   Keywords.
    -   Repo, homepage and issues links.
    -   ...
-   Did you removed `"private": true` from your `package.json`? By security, you cannot publish this template on NPM. Just remove this line to do it!

> <u>_**IMPORTANT**_</u>: You can publish only one time a specific version for a specific package name. So, be sure about your doing before publishing. See [NPM documentation for more information](https://docs.npmjs.com/cli/v8/commands/npm-publish).

## Project structure

This section presents you the template's structure. Get more information about these elements by clicking on them.

-   [`.github/workflows`](https://docs.github.com/en/actions/using-workflows) -
-   `.vscode` - [VScode](https://code.visualstudio.com)'s workspace settings.
    -   [`extensions.json`](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions) - You can list VScode extensions you recommend for this workspace.
    -   [`settings.json`](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) - You can set custom settings especially for this workspace, and every user will use these settings first.
-   `src` - Your application's source code (here you will mostly use TypeScript).
    -   `main.ts` - Is your application's entrypoint. This is here that all starts.
-   `tests` - Your application's tests.
-   [`.gitignore`](https://git-scm.com/docs/gitignore) - List files which will not be tracked by Git. Developers community strongly recommend to **not** track generated files (like build files, ...), so, add them here.
-   [`.npmignore`](https://docs.npmjs.com/cli/using-npm/developers#keeping-files-out-of-your-package) - List files which will not be included when your package will published on NPM. As is, only `LICENSE`, `package.json`, `README.md`, and `app` folder will be published.
-   [`gulpfile.ts`](https://gulpjs.com/docs/en/getting-started/creating-tasks) - [Gulp](https://gulpjs.com/)'s tasks file.
-   [`jest.config.ts`](https://jestjs.io/docs/configuration) - [Jest](https://jestjs.io) is a tests framework to run tests on your application. This file allows you to customize Jest's configuration.
-   [`LICENSE`](https://choosealicense.com/) - Your project's license. This file generally contains legal terms about how a third-party person can use your project.
-   [`package.json`](https://docs.npmjs.com/cli/configuring-npm/package-json) - NPM's package manifest.
-   [`README.md`](https://www.makeareadme.com/) - This file! Here you can (and should) write every important information about your project (presentation, get started, ...)
-   [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) - Configuration for [Typescript](https://www.typescriptlang.org) Intellisense and transpilation.

While working, you may see more folders, here are they:

-   `app` - This folder contains your builded application:
    -   `app.js` - When completely builded, all your application will take place in this single file.
    -   `types` - This folder will contain [TypeScript's declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html). These files are very important for TypeScript developers who'll use your package.
    -   `.tmp` - Is a temporary folder which contains only transpiled files of your application before being minified in `app.js`.
-   `docs` - Is a folder which contains all your application's documentation. I recommend you to have a look to ... to understand this content:
    -   `x.x.x` - Is your application version `x.x.x`'s documentation, ready to be published on your GitHub repo's Wiki.
    -   `.github-wiki` - Is a clone of your GitHub repo's Wiki.
    -   `.tmp` - Is a raw version of your project's documentation, as generated by [TypeDoc](https://typedoc.org/).

## How can I use it?

### NPM scripts

This template is equipped with multiple [NPM scripts](https://docs.npmjs.com/cli/using-npm/scripts). Here are how you can use them (`npm run ...`):

#### `build`

> _Is equal to `webpack`._

Build your application and emit its declaration in the `app` folder.

<details>

<summary>Get more details here</summary>

From the app's entrypoint (`src/main.ts`), will generate a transpiled JavaScript and bundled version of your application in `app/app.js` and its declaration in `app/types`.

</details>

#### `clean`

> _Is equal to `gulp clean`._

Delete generated files/folders (app and documentation).

#### `document`

> _Is equal to `gulp document`._

Generate GitHub Wiki-ready documentation.

<details>

<summary>Get more details here</summary>

1. Will delete temporary-generated (`docs/.tmp`) and current (`docs/x.x.x`) version documentation.
2. Will generate your application's documentation as [Markdown](https://www.markdownguide.org/basic-syntax/) files with [TypeDoc](https://typedoc.org/guides/installation/) (in `docs/.tmp`).
3. Will load all TypeDoc's documentation (from `docs/.tmp`) and rewrite all links to other documentation files (`http...` links are not modified) and save the edited file in the versioned documentation folder (`docs/x.x.x`, where `x.x.x` is your `package.json`'s `version` field.):
    - For example, a file called `path/to/my/docs/.tmp/classes/aCustomError.md` will be saved as `path/to/my/docs/x.x.x/x.x.x-aCustomError.md`.
    - For example, a link as `../classes/aCustomError.md` will be saved as `x.x.x-aCustomError`.
    - Like this, all version's files are prefixed by their version's tag. All your project's documentation can be uploaded to your wiki without risk (as all 3.0.0 files are prefixed by `3.0.0-`, 2.0.0 by `2.0.0-`, and so on...)

</details>

> _To prevent redundancy with documentation files, your project's README will note be included in the per version-documentation. The version documentation's entrypoint will be called `x.x.x.md`, where your main documentation's entrypoint will be `Home.md`, the GitHub wiki's main file that you have to create._

#### `prepare`

Is an utility command which will patch TypeScript's behavior to rewrite [aliases](https://www.typescriptlang.org/tsconfig/paths.html).

#### `prepublishOnly`

Is a [NPM "special" script](https://docs.npmjs.com/cli/v9/using-npm/scripts) triggered [before publishing the package on NPM](https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish). It will build the application (`npm run build`).

#### `publishDocumentation`

> _Is equal to `gulp publishDocumentation`._

Will publish your application current version's documentation on your GitHub repo's wiki.

<details>

<summary>Get more details here</summary>

1. Will run [`document`](#document) task to generated GitHub wiki-ready documentation.
2. Will clone the wiki repo as `docs/.github-wiki`.
3. Will copy your `x.x.x` version documentation in the wiki's clone.
4. Will commit and push all new documentation.

</details>

> _To run this functionality, you must host your repo on GitHub and have the [wiki service](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis) enabled._

> _For safety purpose, you will not be able to publish documentation for version `a.b.c` if any file prefixed by `a.b.c-` already exists in the wiki's repo. To bypass it, you have to first delete all `a.b.c-` files, then run again this task._

#### `test`

Will run Jest and load all [`tests/**/*.test.ts` files](https://jestjs.io/docs/getting-started).

### GitHub Workflows

GitHub provides a workflow service which can run commands on specific events. These configurations files are stored in `.github/workflows`:

#### `publish-documentation`

Called manually, this workflow will run the [`publishDocumentation`](#publishdocumentation) task to publish the current version's documentation on the GitHub repo's wiki.

#### `publish`

Called when a release is created, it will run sequentially [`test`](#test) (_Jest_), [`publish`](#publish) (_publish the package on NPM_) and [`publishDocumentation`](#publishdocumentation) (_publish the documentation on the GitHub repo's wiki_) tasks.

#### `test`

Called manually or when an edition in the `src` folder is pushed to the remote repo, it will run [`test`](#test) task.

## Contribute

Feel free to [open an issue](https://GitHub.com/Ratibus11/template-npm-package/issues/new) if you want to report bugs or discuss about suggestions!

## License

This package is published under the [Unlicensed](https://choosealicense.com/licenses/unlicense/) license.
See in LICENSE in the repo's root.

<div align="right">Made with &#10084; by <a href="https://GitHub.com/Ratibus11">Ratibus11</a>.</div>

![](https://img.shields.io/GitHub/stars/ratibus11/template-npm-package?style=social)

<sup>

_Don't_ forget [_to put a_ :star:](https://GitHub.com/Ratibus11/template-npm-package) _if you like this project_ :wink:_!_

</sup>
