import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TodoList from "./TodoList";

describe("TodoList", () => {
  it("Should render todo items visually", () => {
    render(<TodoList />);
    const titleInput = screen.getByPlaceholderText("Title");
    const descriptionInput = screen.getByPlaceholderText("Description");
    const dateInput = screen.getByPlaceholderText("Date");

    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test Description" },
    });
    fireEvent.change(dateInput, { target: { value: "2024-08-15" } });

    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    expect(screen.getByText("Test Title"));
    expect(screen.getByText("Test Description"));
    expect(screen.getByText("2024-08-15"));

    fireEvent.change(titleInput, { target: { value: "Test Title 2" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test Description 2" },
    });
    fireEvent.change(dateInput, { target: { value: "2024-08-16" } });

    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    expect(screen.getByText("Test Title 2"));
    expect(screen.getByText("Test Description 2"));
    expect(screen.getByText("2024-08-16"));
  });
});
