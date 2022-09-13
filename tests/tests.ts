// MODULES
// Chai.js - Assertion library for tests
// More informations on https://www.npmjs.com/package/chai
import { expect } from "chai";
// Rewire - Access module's private members
// More informations on https://www.npmjs.com/package/rewire
import * as rewire from "rewire";

// Tested function
import { hi } from "../src/main";

/**
 * This test will check if `hi()` returns "Hello world!".
 * This is an exported function, so we can access it with the `import` instruction.
 */
describe("Demonstration test with exported member", () => {
	it("'hi()' should return 'Hello world!'", () => {
		expect(hi()).to.be.equal("Hello world!");
	});
});

/**
 * This test will check if `iAmTrue` is equal to `true`.
 * This is a private variable, but we can access it with rewire.
 */
describe("Demonstration test with private member", () => {
	// `rewire("pathToModule")` load the module like `import * as myModule from "pathToModule"`.
	// At this point, `module` only contains public members.
	const module = rewire("../src/main.ts");

	// `__get__()` function allows to access a module's private member.
	const iAmTrue = module.__get__("iAmTrue");

	it("'iAmTrue' should be equal to 'true'", () => {
		expect(iAmTrue).to.be.true;
	});
});
