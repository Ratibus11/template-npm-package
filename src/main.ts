/**
 * Exported test function
 * This function is accessible by using `import { hi } from "myModule"`
 * @returns "Hello world!"
 */
function hi(): string {
	return "Hello world!";
}

/**
 * Private variable
 * This variable is NOT exported and cannot called outside the module.
 * However, it is possible to load it, for example, during tests, with rewire (see `tests/hi.ts`)
 */
const iAmTrue = true;

export { hi };
