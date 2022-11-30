import { describe, expect, test } from "@jest/globals";

// ===== TESTED FEATURE
import { hi } from "@main"; // We load only what we want to test.

describe("A test suite. If I run `npm test`, this will be runned.", () => {
    it("My function `hi` should returns 'Hello world!'", () => {
        expect(hi()).toBe("Hello world!");
    });

    it.todo("I should write new tests later.");
});
