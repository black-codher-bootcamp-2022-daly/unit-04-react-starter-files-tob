import { render, screen } from "@testing-library/react";
import { App, Header } from "./App";
import {NavBar} from "./NavBar"


test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Tobia/);
  expect(linkElement).toBeInTheDocument();
});


test("renders the header", () => {
  render(<Header name="Tobia" color="pink" fruit="mango"/>);
  const name = screen.getByText(/Tobia/);
  const color = screen.getByText(/pink/);
  const fruit = screen.getByText(/mango/);
  expect(name).toBeInTheDocument();
  expect(color).toBeInTheDocument();
  expect(fruit).toBeInTheDocument();
});


test("renders the navbar", () => {
  render(<NavBar name="Julia" color="purple">
      <li className="navabar-1">SuperLink 1</li>
      <li>SuperLink 2</li>
  </NavBar>);
    const result = screen.getByText(/SuperLink 1/)
    expect(result).toBeInTheDocument()
})