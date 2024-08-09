import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";


// Code tests here
test("pizza checkbox is initially unchecked", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", {
    name: /add pepperoni/i,
  });
  expect(addPepperoni).not.toBeChecked();
});

test("pizaa list initially contains only cheese", () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(1);

  const myitem = screen.getByText("Cheese");
  expect(myitem).toBeInTheDocument();

  const myitem2 = screen.queryByText("Pepperoni");
  expect(myitem2).not.toBeInTheDocument();
});
//effect of clicking the checkbox
test("checkbox become checked when user clicks it", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", {
    name: /add pepperoni/i,
  });
  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
});

test("topping appears in toppings list when checked", () => {});
