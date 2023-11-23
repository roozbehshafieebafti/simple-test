import { render, screen, fireEvent } from "@testing-library/react";
import { App } from "../App";
import { useApi } from "../Apis/UseApi";
import { getUser } from "../Apis/Users/Users";
import { mockUser } from "./UserTable.test";

jest.mock("../Apis/UseApi");
const mockUseApi = useApi as jest.MockedFunction<typeof useApi>;

jest.mock("../Apis/Users/Users");

describe("App component", () => {
  const mockUserData = {
    results: [mockUser],
  };

  beforeEach(() => {
    mockUseApi.mockReturnValue({
      apiCall: jest.fn(),
      loading: false,
      data: mockUserData,
    });
  });

  it("renders the component correctly", () => {
    render(<App />);

    expect(screen.getByText("Random User:")).toBeInTheDocument();

    expect(screen.getByText("Refetch")).toBeInTheDocument();

    const element = screen.getByTestId("user-table");
    expect(element).toBeInTheDocument();
  });

  it("calls userApi on mount and refetch button click", async () => {
    render(<App />);

    expect(mockUseApi).toHaveBeenCalledTimes(1);
    expect(mockUseApi).toHaveBeenCalledWith(getUser);

    fireEvent.click(screen.getByTestId("refetch-button"));
  });
});
