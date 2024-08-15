import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AddTodoForm from "./AddTodoForm";

describe("AddTodoForm", () => {
  it("Should render all input fields", () => {
    render(<AddTodoForm onSubmit={vi.fn()} />);
    expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Date")).toBeInTheDocument();
  });

  it("Should update input fields when typing", () => {
    render(<AddTodoForm onSubmit={vi.fn()} />);

    const titleInput = screen.getByPlaceholderText("Title");
    const descriptionInput = screen.getByPlaceholderText("Description");
    const dateInput = screen.getByPlaceholderText("Date");

    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test Description" },
    });
    fireEvent.change(dateInput, { target: { value: "2024-08-15" } });

    expect(titleInput).toHaveValue("Test Title");
    expect(descriptionInput).toHaveValue("Test Description");
    expect(dateInput).toHaveValue("2024-08-15");
  });

  it("Should call onSubmit with form data when submitted", () => {
    render(<AddTodoForm onSubmit={vi.fn()} />);

    const titleInput = screen.getByPlaceholderText("Title");
    const descriptionInput = screen.getByPlaceholderText("Description");
    const dateInput = screen.getByPlaceholderText("Date");

    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test Description" },
    });
    fireEvent.change(dateInput, { target: { value: "2024-08-15" } });

    const submitButton = screen.getByRole("button", { name: /add/i });
    fireEvent.click(submitButton);

    expect(vi.fn()).toHaveBeenCalledTimes(1);
    expect(vi.fn()).toHaveBeenCalledWith({
      title: "Test Title",
      description: "Test Description",
      date: "2024-08-15",
    });
  });

  it("Should reset form fields after submission", () => {
    render(<AddTodoForm onSubmit={vi.fn()} />);

    const titleInput = screen.getByPlaceholderText("Title");
    const descriptionInput = screen.getByPlaceholderText("Description");
    const dateInput = screen.getByPlaceholderText("Date");

    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test Description" },
    });
    fireEvent.change(dateInput, { target: { value: "2024-08-15" } });

    const submitButton = screen.getByRole("button", { name: /add/i });
    fireEvent.click(submitButton);

    expect(titleInput).toHaveValue("");
    expect(descriptionInput).toHaveValue("");
    expect(dateInput).toHaveValue("");
  });

  it("Shoud not be able to create an empty to do post", () => {
    render(<AddTodoForm onSubmit={vi.fn()} />);
  });
});
