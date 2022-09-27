// MODULES
// Chai.js - Assertion library for tests
// More informations on https://www.npmjs.com/package/chai
import { expect } from "chai";

// Tested function
import { hi } from "@src/main";

/**
 * This test will check if `hi()` returns "Hello world!".
 * This is an exported function, so we can access it with the `import` instruction.
 */
describe("Demonstration test with exported member", () => {
	it("'hi()' should return 'Hello world!'", () => {
		expect(hi()).to.be.equal("Hello world!");
	});
});
