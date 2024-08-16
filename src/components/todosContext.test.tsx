import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TodosProvider } from "./TodoContext";
import TodoList from "./TodoList";

describe("TodosContext", () => {
  it("should throw an error if useTodos function from todoContext is used outside of TodosProvider", () => {
    expect(() => render(<TodoList />)).toThrowError(
      "useTodos requires parent being wrapped by TodosProvider"
    );
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
