import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Doctors from "./Doctors";
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

describe("Doctors Page", () => {
  test("should render correctly", () => {
    render(
      <Provider store={testStore}>
        <Router>
          <Doctors />
        </Router>
      </Provider>
    );
  });

  test("should display 'All Doctors' text", () => {
    render(
      <Provider store={testStore}>
        <Router>
          <Doctors />
        </Router>
      </Provider>
    );

    const doctorsTextElements = screen.queryAllByText("All Doctors");
    expect(doctorsTextElements.length).toBeGreaterThan(0);
  });

});
