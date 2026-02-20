// src/pages/__tests__/Count.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";

import Count from "../Count";
import { useStore } from "../../hooks/useStore";

describe("Count Component", () => {
  beforeEach(() => {
    // Reset store state before each test
    // Use setState on the store instance itself
    useStore.setState({ count: 0 });
  });

  it("renders with initial count 0", () => {
    render(<Count />);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  it("increments the count on increment button click", () => {
    render(<Count />);
    const incrementButton = screen.getByRole("button", { name: /Increment/i });
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });

  it("decrements the count on decrement button click", () => {
    // Set initial state to 2
    useStore.setState({ count: 2 });

    render(<Count />);
    const decrementButton = screen.getByRole("button", { name: /Decrement/i });

    fireEvent.click(decrementButton);
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });

  it("does not decrement below 0", () => {
    // Set initial state to 0
    useStore.setState({ count: 0 });

    render(<Count />);
    const decrementButton = screen.getByRole("button", { name: /Decrement/i });
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });
});
