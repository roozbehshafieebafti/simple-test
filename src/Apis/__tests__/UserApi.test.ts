import { renderHook, act } from "@testing-library/react-hooks";
import { useApi } from "../UseApi";

const mockAsyncFunction = jest.fn();

describe("useApi hook", () => {
  it("should handle successful API call", async () => {
    mockAsyncFunction.mockResolvedValue("Mocked Response");

    const { result, waitForNextUpdate } = renderHook(() =>
      useApi(mockAsyncFunction)
    );

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBeUndefined();

    act(() => {
      result.current.apiCall();
    });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBe("Mocked Response");
  });
});
