import { expect, test } from "vitest";
import { getParsedValue } from "./index";

test("Returns expected values for cos", () => {
  expect(getParsedValue("cos(25deg)").value).toBe(0.9063077870366499);
});
