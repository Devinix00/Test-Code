import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("main 태그가 있어요?", () => {
  render(<App />);
  const mainElement = screen.getByRole("main");
  expect(mainElement).toBeInTheDocument();
});
