import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import TodoList from "./TodoList";

describe("TodoList", () => {
  it("Should display an unordered list of todo items", () => {
    render(<TodoList />);
  });
});
