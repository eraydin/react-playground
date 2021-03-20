import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

test("should render a label and counter", () => {
  const { getByLabelText, getByRole } = render(<Counter />);
  const label = getByLabelText("Count");
  expect(label).toBeInTheDocument();

  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should render a counter with custom label", () => {
  const { getByLabelText, getByRole } = render(<Counter label={"Current"} />);
  const label = getByLabelText("Current");
  expect(label).toBeInTheDocument();

  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should start at zero", () => {
  const { getByRole } = render(<Counter />);
  const counter = getByRole("counter");
  expect(counter).toHaveTextContent("0");
});

test("should start at another value", () => {
  const { getByRole } = render(<Counter start={10} />);
  const counter = getByRole("counter");
  expect(counter).toHaveTextContent("10");
});

test("should increment the count by one", () => {
  const { getByRole } = render(<Counter />);
  const counter = getByRole("counter");
  expect(counter).toHaveTextContent("0");
  fireEvent.click(counter);
  fireEvent.click(counter);
  expect(counter).toHaveTextContent("2");
});

test("should increment the count by ten", () => {
  const { getByRole } = render(<Counter />);
  const counter = getByRole("counter");
  expect(counter).toHaveTextContent("0");
  fireEvent.click(counter, { shiftKey: true });
  expect(counter).toHaveTextContent("10");
});
