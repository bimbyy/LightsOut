import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";

it("renders the starter board correctly", () => {
  const { container } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={0} />);
  expect(container).toMatchSnapshot();
});

it("flips the correct cells when a cell is clicked", () => {
  const { getAllByRole } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={0} />);
  const cells = getAllByRole("cell"); // Assume role="cell" is set on your Cell component
  fireEvent.click(cells[0]); // Click the first cell
  // Add assertions here to check for the correct cells being flipped
});

it("shows a 'You won!' message when all cells are turned off", () => {
  // This test would need mocking of the initial board state to ensure it starts in a nearly winning condition
  // Since React Testing Library encourages user-centric testing, consider how a user would achieve a win
  // and simulate those actions, or mock the Board's initial state carefully to start near a win.
});