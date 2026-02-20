// src/hooks/__tests__/useStore.test.jsx
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";

import { useStore } from "../useStore";

describe("useStore", () => {
  beforeEach(() => {
    // Reset store state before each test
    act(() => {
      useStore.setState({ count: 0 });
    });
  });

  it("should initialize with count 0", () => {
    const { result } = renderHook(() => useStore());
    expect(result.current.count).toBe(0);
  });

  it("should increment count", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it("should decrement count", () => {
    // First increment to make sure we can decrement
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.increment();
      result.current.increment();
    });

    expect(result.current.count).toBe(2);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(1);
  });

  it("should not decrement below 0", () => {
    const { result } = renderHook(() => useStore());

    // Initially 0
    expect(result.current.count).toBe(0);

    act(() => {
      result.current.decrement();
    });

    // Should remain 0
    expect(result.current.count).toBe(0);
  });
});
