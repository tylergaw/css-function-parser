import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { getParsedValue } from "./index.js";

describe("#getParsedValue", () => {
  it("should return expected values for cos", () => {
    assert.equal(getParsedValue("cos(25deg)").value, 0.9063077870366499);
  });
});
