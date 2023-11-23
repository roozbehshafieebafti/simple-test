import axios from "axios";
import { apiCall } from "../APICall";

jest.mock("axios");

describe("apiCall function", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should make a successful GET request", async () => {
    (axios as any).mockResolvedValue({ data: { example: "data" }, headers: {} });

    const response = await apiCall("/endpoint");

    expect(axios).toHaveBeenCalledWith({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_URL}/endpoint`,
      data: null,
      headers: {},
    });

    expect(response).toEqual({ data: { example: "data" }, headers: {} });
  });

  it("should make a successful POST request", async () => {
    (axios as any).mockResolvedValue({ data: { example: "data" }, headers: {} });

    const response = await apiCall("/endpoint", "POST", { postData: "example" }, { Authorization: "Bearer token" });

    expect(axios).toHaveBeenCalledWith({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/endpoint`,
      data: { postData: "example" },
      headers: { Authorization: "Bearer token" },
    });

    expect(response).toEqual({ data: { example: "data" }, headers: {} });
  });

});
