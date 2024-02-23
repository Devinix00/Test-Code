import { render, screen } from "@testing-library/react";

import App from "../src/App";

describe("App 컴포넌트", () => {
  test("count가 0으로 초기화 되어 있음?", () => {
    render(<App />);
    const countEl = screen.getByTestId("count");
    expect(countEl).toHaveTextContent("0");
  });

  test("-버튼이 제대로 되어있음?", () => {
    render(<App />);
    const minusButtonEl = screen.getByTestId("minus-button");
    expect(minusButtonEl).toHaveTextContent("-");
  });

  test("+버튼이 제대로 되어있음?", () => {
    render(<App />);
    const plusButtonEl = screen.getByTestId("plus-button");
    expect(plusButtonEl).toHaveTextContent("+");
  });
});
