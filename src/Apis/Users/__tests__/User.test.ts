import { getUser } from "../Users";
import { apiCall } from "../../APICall";

jest.mock("../../APICall");

describe("getUser function", () => {
  it("fetches successfully data from the API", async () => {
    (apiCall as any).mockResolvedValue({ data: { info: {}, results: [{}] } });

    const result = await getUser();

    expect(apiCall).toHaveBeenCalledWith("/");

    expect(result).toEqual({ info: {}, results: [{}] });
  });
});
