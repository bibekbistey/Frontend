import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Users from "./Users";
import { server } from "../../mocks/server";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { alertSlice } from "../../redux/features/alertSlice";
import { userSlice } from "../../redux/features/userSlice";
import { mockMatchMedia } from "jest-canvas-mock";

// Mock Redux store
const testStore = createStore(
  combineReducers({
    alerts: alertSlice.reducer,
    user: userSlice.reducer,
  })
);

beforeAll(() => {
  server.listen();
  //   mockMatchMedia();
});

afterEach(() => {
  server.resetHandlers();
  //   mockMatchMedia.clear();
});

afterAll(() => server.close());

describe("Users Page", () => {
  test("should render correctly", () => {
    render(
      <Provider store={testStore}>
        <Router>
          <Users />
        </Router>
      </Provider>
    );
  });

    test("should display 'Users List' text", () => {
    render(
      <Provider store={testStore}>
        <Router>
          <Users />
        </Router>
      </Provider>
    );

    const usersTextElements = screen.queryAllByText("Users List");
    expect(usersTextElements.length).toBeGreaterThan(0);
    });
});