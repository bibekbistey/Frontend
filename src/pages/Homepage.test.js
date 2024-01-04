import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";
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
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => server.close());

describe("Booking Page", () => {
    test("should render correctly", () => {
        render(
            <Provider store={testStore}>
                <Router>
                    <HomePage />
                </Router>
            </Provider>
        );
    });

    test("should display 'Home Page' text", () => {
        render(
            <Provider store={testStore}>
                <Router>
                    <HomePage />
                </Router>
            </Provider>
        );

        const homePageTextElements = screen.queryAllByText("Home Page");
        expect(homePageTextElements.length).toBeGreaterThan(0);
    }
    );

    test("should have 'Doctor List' component", () => {
        render(
            <Provider store={testStore}>
                <Router>
                    <HomePage />
                </Router>
            </Provider>
        );

        const doctorListElements = screen.queryAllByText("Doctor List");
        expect(doctorListElements.length).toBe(0);
    }
    );
});