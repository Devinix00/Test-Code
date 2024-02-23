import { render, screen } from "@testing-library/react";

import App from "../src/App";

describe("App 컴포넌트", () => {
  test("count가 0으로 초기화 되어 있음?", () => {
    render(<App />);
    const countEl = screen.getByTestId("count");
    expect(countEl).toHaveTextContent("0");
  });
});
