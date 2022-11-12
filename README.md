# TEMPLATE - NPM package

A basic template for NPM packages with TypeScript, Gulp and Mocha/Chai.js.

## Table of content

-   [What does it contains?](#what-does-it-contains)
-   [How can I start with it?](#how-can-i-start-with-it)
-   [Checklist](#checklist)
-   [What is the template's structure?](#what-is-the-templates-structure)
-   [How can I use it?](#how-can-i-use-it)
-   [Contributing](#contributing)
-   [License](#license)
-   [Credits to dependencies](#credits-to-dependencies)

## What does it contains?

This repository contains tools to start development of NPM packages with:

-   [TypeScript](https://www.typescriptlang.org/) - Typed version of JavaScript
-   [Mocha](https://mochajs.org/)/[Chai.js](https://www.chaijs.com/) - Tests and assertions libraries (used to test project's features)

## How can I start with it?

1. Download a copy of this repo [here](https://github.com/Ratibus11/template-npm-package/archive/refs/heads/main.zip) and uncompress it.
2. Initialize a git instance in the folder. Open your terminal and type:

```bash
cd path/to/the/repo
git init
```

3. Open the folder with your favorite IDE.
4. _Let's code!_

## Checklist

Don't forget to check some points before coding and publishing!

-   Has your package the correct manifest? (`package.json` (see [NPM documentation](https://docs.npmjs.com/cli/v8/configuring-npm/package-json) for more informations))
    -   Name (name and display name)
    -   Description
    -   Version
    -   Author (name and/or url and/or email address)
    -   Keywords
    -   Homepage and bugs links
-   Is your license the one you want? (Check [choosealicence](https://choosealicense.com/) for more informations)
-   Is your package's version the good one? See [Semver](https://semver.org/) for more informations.
-   Did you removed `"private": true` from `package.json`? By security, you cannot publish this template on NPM. Just remove this line to do it!

> **_IMPORTANT_**: You can publish only one time a specific version for a specific package name. So, be sure about your doing before publishing. See [NPM documentation](https://docs.npmjs.com/cli/v8/commands/npm-publish) for more informations.

## What is the template's structure?

-   Folders:

    -   `.git` - Used by Git to manage your repo. Don't touch it without knowing what you're doing!
    -   `.github` - Used by GitHub to manage some things like workflows. See [here](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) for more informations about GitHub Actions and it's workflows.
    -   [`.vscode`](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings) - VScode's workspace settings. Used here to hide some unused/unwanted elements. Can contains more functionalities like debug and tasks You can change it as you want/need.
    -   `app` - Folder which contains transpiled project. Basically, you don't need to see it.
    -   [`node_modules`](https://docs.npmjs.com/cli/v7/configuring-npm/folders#node-modules) - Folder which contains Node.js local modules.
    -   `src` - Sources folder, where you code your project.
    -   `tests` - Tests folder, where you write your features' tests.
    -   `types` - Typescript declarations folder, for TypeScript developpers. Basically, you don't need to see it.

-   Files:
    -   [`.gitignore`](https://git-scm.com/docs/gitignore) - Used by Git to ignore unwanted files/folders for commits.
    -   [`.npmignore`](https://docs.npmjs.com/cli/v8/using-npm/developers#keeping-files-out-of-your-package) - Used by NPM to ignore unwanted files/folders in the published package.
    -   [`gulpfile.js`](https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles/) - Gulp tasks file. Used to build the project, but can be extended to do other tasks.
    -   `LICENSE` - A way to store your package's licence.
    -   [`package-lock.json`](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json) - Used by Node.js to list installed packages.
    -   [`package.json`](https://docs.npmjs.com/cli/v8/configuring-npm/package-json) - Your package's Node.js manifest.
    -   `README.md` - Your package's information file. Github can display a README file in each folder. NPM will only display root README.
    -   [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) - Configuration for Typescript Intellisense and transpilation.

## How can I use it?

> **_NOTE:_** On `npm publish`, intallation will be performed, then `test`, then `build` scripts will be called before publishing.

-   NPM scripts (`npm run ...`):
    -   `test` - Will load all `.ts` files in `/tests` (and subfolders) and launch all tests. You don't need to compile your project to perform tests.
    -   `build` - Will build the project: `/app` and `/types` will be both cleared and will contain:
        -   `/app` - All `.ts` files from `/src` (and subfolders), compiled and minified to `.js`.
        -   `/types` - All typings and descriptions from `.ts` files from `/src` (and subfolders)'s declation.
    -   Some of the scripts [are handled by NPM](https://docs.npmjs.com/cli/v9/using-npm/scripts):
        -   `prepare` - Will patch Typescript to rewrite paths aliases while transpiling.
        -   `prepublishOnly` - Called before publishing your package.

The following exemple show the project's compilation with the current `tsconfig.json` and `src/main.ts`:

```ts
// src/main.ts - The projetct's entry.
// Import of subfile with TS alias
// `ts-patch` and `typescript-transform-paths` will be able to rewrite Typescript imports while transpiling to `.js` and `.d.ts`.
// Run `npm i` to ensure that `ts-patch` was runned.
import * as aliasDemonstration from "@aliasDemonstration";

/**
 * Exported test function
 * This function is accessible by using `import { hi } from "myModule"`
 * @returns "Hello world!"
 */
function hi(): string {
    return "Hello world!";
}

export { hi, aliasDemonstration };

// src/alias.ts - src/main.ts dependency.
/**
 * Subfile import with alias demonstration
 * @returns "Hello world!"
 */
function alias(): string {
    return "Hello world!";
}

export { alias };
```

Transpiled Javascript:

<!-- prettier-ignore-start -->
```js
// app/main.js - The transpiled and minified version of src/main.ts
Object.defineProperty(exports,"__esModule",{value:!0}),exports.aliasDemonstration=exports.hi=void 0;const aliasDemonstration=require("./alias");function hi(){return"Hello world!"}exports.aliasDemonstration=aliasDemonstration,exports.hi=hi;

// app/alias.js - app/main.js dependency
function alias(){return"Hello world!"}Object.defineProperty(exports,"__esModule",{value:!0}),exports.alias=void 0,exports.alias=alias;
```

<!-- prettier-ignore-end -->

Extracted declaration:

```ts
// types/main.d.ts - Needed by TypeScript developers to use your package. Like this way, developers don't need to install another package to get declarations.
import * as aliasDemonstration from "./alias";
/**
 * Exported test function
 * This function is accessible by using `import { hi } from "myModule"`
 * @returns "Hello world!"
 */
declare function hi(): string;
export { hi, aliasDemonstration };

// types/alias.d.ts - src/alias.ts's declaration file
/**
 * Subfile import with alias demonstration
 * @returns "Hello world!"
 */
declare function alias(): string;
export { alias };
```

As you can see, alias was used to import `src/alias.ts` in `src/main.ts` and they were rewrited while transpiling. You can use your own aliases for your project. See [TypeScript's config file (`tsconfig.json`)](https://www.typescriptlang.org/tsconfig#paths) for more details.

## Workflows

If your remote Git platform is GitHub, workflows will run (see [`/.github/workflows`](https://www.google.com/search?client=firefox-b-d&q=github+workflow)):

-   `test` - Called after each push, will run all repo's tests (= `npm run test`)
-   `npm-publish` - Called when a release is created on GitHub: will install all modules, test and publish the package (Tests and build will be successively called before the publication. The publications will be effective only if the build and tests successed.) (= `npm publish`)

## Contributing

Feel free to [open an issue](https://github.com/Ratibus11/template-npm-package/issues/new) if you want to discuss about suggestions!

## License

This package is published under the [Unlicensed](https://choosealicense.com/licenses/unlicense/) license.

## Credits to dependencies

Using multiple modules:

-   dependencies:
    -   _nothing, it's up to you to find what you need!_
-   Development dependencies:
    -   [`chai`](https://www.npmjs.com/package/chai) - Assertions (tests)
    -   [`glob`](https://www.npmjs.com/package/glob) - Multiple files selection (build)
    -   [`gulp`](https://www.npmjs.com/package/gulp) - Tasks runner (build)
    -   [`gulp-minify`](https://www.npmjs.com/package/gulp-minify) - Gulp plugin for files minifying (build)
    -   [`gulp-rename`](https://www.npmjs.com/package/gulp-rename) - Gulp plugin for files renaming (build)
    -   [`gulp-typescript`](https://www.npmjs.com/package/gulp-typescript) - Gulp plugin for Typescript compilation (build)
    -   [`rewire`](https://www.npmjs.com/package/rewire) - Access module's private elements (tests)
    -   [`ts-mocha`](https://www.npmjs.com/package/ts-mocha) - Typescript version of Mocha (tests)
    -   [`ts-patch`](https://www.npmjs.com/package/ts-patch) - Patch for Typescript aliases rewrite _(build)_
    -   [`tsconfig-paths`](https://www.npmjs.com/package/tsconfig-paths) - Loader for `tsconfig.json` aliases _(tests)_
    -   [`typescript-transform-paths`](https://www.npmjs.com/package/typescript-transform-paths) - Typescript plugin for aliases rewrite _(build)_

<div align="right">Made with &#10084; by <a href="https://github.com/Ratibus11">Ratibus11</a>.</div>
````
