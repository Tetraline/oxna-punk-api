import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "./Dropdown";

it("Should render parent button only", () => {
  // 1. Arrange
  render(
    <Dropdown
      description="What alcohol content?"
      options={[
        ["High (>6%)", "abv", "high"],
        ["Low (<6%)", "abv", "low"],
        ["Zero", "abv", "zero"],
      ]}
    />
  );
  // 2. Act
  const button = screen.getByRole("button");
  // 3. Assert
  expect(button).toBeInTheDocument();
});

it("should render the children when the parent is clicked", () => {
  // 1. Arrange
  render(
    <Dropdown
      description="What alcohol content?"
      options={[
        ["High (>6%)", "abv", "high"],
        ["Low (<6%)", "abv", "low"],
        ["Zero", "abv", "zero"],
      ]}
    />
  );
  // 2. Act
  const button = screen.getByRole("button");
  userEvent.click(button);
  const buttons = screen.getAllByRole("button");
  // 3. Assert
  expect(buttons.length).toEqual(4);
});
