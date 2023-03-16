import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import App from "./App";
import { fakeUsers } from "./utils/mockData";

describe("testing main page", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("render mocked users", async () => {
    fetchMock.mockResponse(JSON.stringify(fakeUsers));

    render(<App />);

    for (let i = 0; i < fakeUsers.length; i++) {
      const mockedUser = await screen.findByText(fakeUsers[i].name);
      expect(mockedUser).toBeInTheDocument();
    }

    //screen.logTestingPlaygroundURL();
  });
});
