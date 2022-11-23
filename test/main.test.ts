import { describe, expect, test } from "vitest";
import { add } from "../src/main";

describe("test", () => {
	test("test", () => {
		expect(add(1, 2)).toBe(3);
	})
})