import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import App from "./App";
import { fakeUsers } from "./utils/mockData";

describe("testa a página principal", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("renderiza usuários", async () => {
    fetchMock.mockResponse(JSON.stringify(fakeUsers));

    render(<App />);

    //const mockedUser = await screen.findAllByText(/mayra/i);
    //expect(mockedUser).toBeInTheDocument();

    for (let i = 0; i < fakeUsers.length; i++) {
      const mockedUser = await screen.findByText(fakeUsers[i].name);
      expect(mockedUser).toBeInTheDocument();
    }

    screen.logTestingPlaygroundURL();
  });
});
