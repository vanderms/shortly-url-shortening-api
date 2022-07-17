import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ShortenerForm } from "components/forms/shortener/shortener-form";
import { act } from "react-dom/test-utils";

describe("Test form error messages", () => {
  it("shoud not display any error message on the form initial state", async () => {
    render(<ShortenerForm />);
    const errorMessage = screen.queryByTestId("error-message");
    expect(errorMessage).toBeNull();
  });

  it("should display an error message if the user try to send an empty url", async () => {
    render(<ShortenerForm />);
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
      render(<ShortenerForm />);
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
      render(<ShortenerForm />);
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
});
