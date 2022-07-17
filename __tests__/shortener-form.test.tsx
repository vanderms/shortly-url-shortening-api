import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ShortenerForm } from "components/forms/shortener/shortener-form";
import { act } from "react-dom/test-utils";

describe("Test form error messages", () => {
  it("should display an error message if the user try to send an empty url", async () => {
    render(<ShortenerForm />);
    const label = screen.getByText(/shorten a link here/i);
    const input = screen.getByLabelText(/shorten a link here/i);
    expect(input).toHaveValue("");
    const submit = screen.getByText(/shorten it/i);
    await act(async () => {
      fireEvent.click(submit);
    });
    expect(label).toHaveTextContent(/please add a link/i);
  });
});
