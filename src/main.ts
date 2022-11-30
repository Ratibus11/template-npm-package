/**
 * Import of sub-file with TS alias
 * `ts-patch` and `typescript-transform-paths` will be able to rewrite Typescript imports while transpiling to `.js` and `.d.ts`.
 * Run `npm i` to ensure that `ts-patch` was executed.
 */
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
