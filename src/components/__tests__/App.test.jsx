import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, expect } from "vitest"; // Removed 'test' since we use 'it'
import { MemoryRouter } from "react-router-dom";

import App from "@/components/App";

it("renders the App component", async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Welcome to the Home Page/i)).toBeInTheDocument();

  await user.click(screen.getByText(/Go to Count Page/i));
  expect(await screen.findByText(/Count: 0/i)).toBeInTheDocument();

  await user.click(screen.getByText(/Increment/i));
  expect(await screen.findByText(/Count: 1/i)).toBeInTheDocument();

  await user.click(screen.getByText(/Decrement/i));
  expect(await screen.findByText(/Count: 0/i)).toBeInTheDocument();
});
