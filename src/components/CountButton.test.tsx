import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CountButton from "./CountButton";

describe("CountButton", () => {
  it("should start at 0", () => {
    // Arrange/Act
    render(<CountButton />);

    // Assert
    expect(screen.getByRole("button")).toHaveTextContent("count is 0");
  });
});
