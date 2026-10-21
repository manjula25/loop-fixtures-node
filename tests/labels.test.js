"use strict";

// Contract suite: green with all three seeded defects present. It covers
// labelFor only; the stats and page defects are latent (born green).
const { labelFor } = require("../src/labels");

test("labelFor zero", () => expect(labelFor(0)).toBe("0 items"));
test("labelFor one", () => expect(labelFor(1)).toBe("1 items"));
test("labelFor many", () => expect(labelFor(5)).toBe("5 items"));
