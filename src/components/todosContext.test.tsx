import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TodosProvider } from "./TodoContext";
import TodoList from "./TodoList";

describe("TodosContext", () => {
  it("should throw an error if useTodos is used outside of TodosProvider", () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() => render(<TodoList />)).toThrowError(
      "useTodos requires parent being wrapped by TodosProvider"
    );

    // Restore console.error
    consoleErrorSpy.mockRestore();
  });

  it("should not throw an error if TodoList is used inside TodosProvider", () => {
    expect(() =>
      render(
        <TodosProvider>
          <TodoList />
        </TodosProvider>
      )
    ).not.toThrow();
  });
});
