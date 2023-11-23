import { render } from "@testing-library/react";
import { MemeorizedCell } from "../MemorizedCell";
import { screen } from "@testing-library/dom";

describe("MemeorizedCell component", () => {
  it("renders text content", () => {
    const { container } = render(<MemeorizedCell content="Test" type="text" />);

    const element = screen.getByTestId("cell-td");
    expect(element).toBeInTheDocument();

    expect(container.textContent).toBe("Test");
  });

  it("renders image content", () => {
    const { container } = render(
      <MemeorizedCell content="image-url" type="image" />
    );
    const element = screen.getByTestId("cell-td");
    expect(element).toBeInTheDocument();

    const imageElement = container.querySelector("img");
    expect(imageElement).toBeInTheDocument();
  });

  it("renders default content when content is not provided", () => {
    const { container } = render(<MemeorizedCell type="text" />);
    const element = screen.getByTestId("cell-td");
    expect(element).toBeInTheDocument();

    expect(container.textContent).toBe("--");
  });
});
