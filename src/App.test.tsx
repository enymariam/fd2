import { render, screen } from "@testing-library/react";
import App from "./App";

test("Display the app title", () => {
    render(<App />);
    const title = screen.getByText(/Sentiments/i);
    expect(title).toBeInTheDocument();
});
