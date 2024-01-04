import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import { server } from "../mocks/server";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { alertSlice } from "../redux/features/alertSlice";
import { userSlice } from "../redux/features/userSlice";

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

describe("Layout Page", () => {
  test("should render correctly", () => {
    render(
      <Provider store={testStore}>
        <Router>
          <Layout />
        </Router>
      </Provider>
    );
  });

    test("should display at least one 'MediBook' text", () => {
        render(
            <Provider store={testStore}>
                <Router>
                    <Layout />
                </Router>
            </Provider>
        );

        const mediBookTextElements = screen.queryAllByText("MediBook");
        expect(mediBookTextElements.length).toBeGreaterThan(0);
    }
    );
});