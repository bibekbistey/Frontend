import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Appointments from "./Appointments";
import { server } from "../mocks/server";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { alertSlice } from "../redux/features/alertSlice";
import { userSlice } from "../redux/features/userSlice";
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

describe("Appointment Page", () => {
  test("should render correctly", () => {
    render(
      <Provider store={testStore}>
        <Router>
          <Appointments />
        </Router>
      </Provider>
    );
  });

  test("should display 'Appointments List' text", () => {
    render(
      <Provider store={testStore}>
        <Router>
          <Appointments />
        </Router>
      </Provider>
    );

    const appointmentsTextElements = screen.queryAllByText("Appointments List");
    expect(appointmentsTextElements.length).toBeGreaterThan(0);

  });

  // test("should display 'All Doctors' text", () => {
  //   render(
  //     <Provider store={testStore}>
  //       <Router>
  //         <Doctors />
  //       </Router>
  //     </Provider>
  //   );

  //   const doctorsTextElements = screen.queryAllByText("All Doctors");
  //   expect(doctorsTextElements.length).toBeGreaterThan(0);
  // });

});
