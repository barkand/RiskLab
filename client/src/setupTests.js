import "@testing-library/jest-dom";

import { server } from "../src/Mocks/node";

beforeAll(() => {
  if (process.env.REACT_APP_SERVER_URL === "") {
    server.listen();
  }
});

afterAll(() => {
  if (process.env.REACT_APP_SERVER_URL === "") {
    server.close();
  }
});
