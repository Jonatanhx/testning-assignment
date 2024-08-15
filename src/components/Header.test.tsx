import { fireEvent, render, screen } from "@testing-library/react";
import { useContext } from "react";
import { describe, expect, it } from "vitest";
import AddTodoForm from "./AddTodoForm";
import Header from "./Header";
import { Todo, TodosContext, TodosProvider } from "./TodoProvider";

const MockAddTodoForm = () => {
  const { addTodo } = useContext(TodosContext) || { addTodo: () => {} };

  const handleSubmit = (data: {
    title: string;
    description: string;
    date: string;
  }) => {
    addTodo(data as Todo);
  };

  return <AddTodoForm onSubmit={handleSubmit} />;
};

describe("Header", () => {
  it("should display a counter of todos, starting at 0", () => {
    render(
      <TodosProvider>
        <Header />
      </TodosProvider>
    );
    expect(screen.getByText(/Number of todos: 0/i)).toBeInTheDocument();
  });

  it("should increment the counter when a new todo is added", () => {
    render(
      <TodosProvider>
        <Header />
        <MockAddTodoForm />
      </TodosProvider>
    );

    const titleInput = screen.getByPlaceholderText("Title");
    const descriptionInput = screen.getByPlaceholderText("Description");
    const dateInput = screen.getByPlaceholderText("Date");
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test Description" },
    });
    fireEvent.change(dateInput, { target: { value: "2024-08-15" } });
    fireEvent.click(addButton);

    expect(screen.getByText(/Number of todos: 1/i)).toBeInTheDocument();
  });
});
