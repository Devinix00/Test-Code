import { render, waitFor } from "@testing-library/react";
import App from "../src/App";

const mockTodoList = Array(200)
  .fill("")
  .map((_, index) => ({
    userId: 1,
    id: index + 1,
    title: `Test Todo ${index + 1}`,
    completed: false,
  }));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockTodoList),
  })
) as jest.Mock;

test("API 경로 'https://jsonplaceholder.typicode.com/todos/'를 호출하면 200개의 배열 데이터가 성공적으로 받아와지는지 테스트합니다", async () => {
  render(<App />);
  await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

  expect(fetch).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/todos/"
  );

  const responseData = await fetch(
    "https://jsonplaceholder.typicode.com/todos/"
  ).then((response) => response.json());
  expect(Array.isArray(responseData)).toBe(true);
  expect(responseData.length).toBe(200);

  expect(responseData[0]).toEqual({
    userId: 1,
    id: 1,
    title: "Test Todo 1",
    completed: false,
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
