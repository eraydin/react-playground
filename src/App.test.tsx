import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("render hello world", () => {
  const { getByText, getByLabelText, getByRole  } = render(<App />);
  const linkElement = getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
  const label = getByLabelText("Current");
  expect(label).toBeInTheDocument();
  const counter = getByRole("counter");
  expect(counter).toHaveTextContent("0");
});
