import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BookingPage from "./BookingPage";
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
                    <BookingPage />
                </Router>
            </Provider>
        );
    });

    test("should handle booking", async () => {
        render(
            <Provider store={testStore}>
                <Router>
                    <BookingPage />
                </Router>
            </Provider>
        );

        // Simulate user input
        fireEvent.change(screen.getByTestId("date-picker"), {
            target: { value: "2023-08-10" }, // Replace with a valid date
        });

        fireEvent.change(screen.getByTestId("time-picker"), {
            target: { value: "10:00" }, // Replace with a valid time
        });

        // check value of input fields
        expect(screen.getByTestId("date-picker").value).toBe("2023-08-10");

        // check if the button text is correct
        expect(screen.getByRole("button", { name: /Book Now/i })).toBeInTheDocument();
        
    });
});
