import { render, screen } from "@testing-library/react";
import App from "./App";

test("näyttää sovelluksen otsikon", () => {
    render(<App />);
    const otsikko = screen.getByText(/Sentimental Analysis App/i);
    expect(otsikko).toBeInTheDocument();
});
