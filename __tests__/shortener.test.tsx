import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import axios from "axios";
import { ShortenerSection } from "components/sections/shortener/shortener";
import { ShortenerContextProvider } from "services/contexts/shortener-context";

jest.mock("axios");
const axiosMock = axios as jest.Mocked<typeof axios>;

const Shortener: React.FC = () => {
  return (
    <ShortenerContextProvider>
      <ShortenerSection />
    </ShortenerContextProvider>
  );
};

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

it("shoud not display any error message on the form initial state", async () => {
  render(<Shortener />);
  const errorMessage = screen.queryByTestId("error-message");
  expect(errorMessage).toBeNull();
});

it("should display an error message if the user try to send an empty url", async () => {
  render(<Shortener />);
  const form = screen.getByRole("form");
  const input = screen.getByLabelText(/shorten a link here/i);
  expect(input).toHaveValue("");
  await act(async () => {
    fireEvent.submit(form);
  });
  const errorMessage = screen.queryByTestId("error-message");
  expect(errorMessage).not.toBeNull();
  expect(errorMessage).toHaveTextContent(/please add a link/i);
});

it.each(["wwww", "www.google@com", "google#com", "joe@email.com"])(
  "should display an error message if the user try to send an invalid url: %s",
  async (url) => {
    render(<Shortener />);
    const form = screen.getByRole("form");
    const input = screen.getByLabelText(/shorten a link here/i);
    await act(async () => {
      fireEvent.change(input, { target: { value: url } });
      fireEvent.submit(form);
    });
    const errorMessage = screen.queryByTestId("error-message");
    expect(errorMessage).not.toBeNull();
    expect(errorMessage).toHaveTextContent(/link should be a valid URL/i);
  }
);

it.each(["www.google.com", "google.com", "https://www.google.com/"])(
  "should not display an error message if the user try to send an invalid url: %s",
  async (url) => {
    render(<Shortener />);
    const form = screen.getByRole("form");
    const input = screen.getByLabelText(/shorten a link here/i);
    await act(async () => {
      fireEvent.change(input, { target: { value: url } });
      fireEvent.submit(form);
    });
    const errorMessage = screen.queryByTestId("error-message");
    expect(errorMessage).toBeNull();
  }
);

it("should call the shortening api with the right url", async () => {
  render(<Shortener />);

  const form = screen.getByRole("form");
  const input = screen.getByLabelText(/shorten a link here/i);

  await act(async () => {
    fireEvent.change(input, { target: { value: "www.big-site-name.com" } });
    fireEvent.submit(form);
  });

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith("https://api.shrtco.de/v2/shorten", {
    params: { url: "www.big-site-name.com" },
  });
});

it("should create a card with the server response data", async () => {
  render(<Shortener />);

  axiosMock.get.mockResolvedValueOnce({
    data: { ok: true, result: { short_link: "https://shorten.com" } },
  });

  const form = screen.getByRole("form");
  const input = screen.getByLabelText(/shorten a link here/i);

  await act(async () => {
    fireEvent.change(input, { target: { value: "www.big-site-name.com" } });
    fireEvent.submit(form);
  });

  await waitFor(() => {
    expect(screen.getByText("www.big-site-name.com")).toBeInTheDocument();
    expect(screen.getByText("https://shorten.com")).toBeInTheDocument();
  });
});
