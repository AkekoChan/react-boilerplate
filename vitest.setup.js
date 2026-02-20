import "@testing-library/jest-dom";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Extend Vitest's expect method with methods from react-testing-library
// This is done automatically by importing @testing-library/jest-dom

// Runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
