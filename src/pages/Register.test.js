import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { server } from "../mocks/server";
import { createStore, combineReducers } from "redux";
import { alertSlice } from "../redux/features/alertSlice";
import { userSlice } from "../redux/features/userSlice";
import Register from "./Register";

const testStore = createStore(
    combineReducers({
        alerts: alertSlice.reducer,
        user: userSlice.reducer,
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Signup Page", () => {
    //   let providerProps;

    beforeAll(() => {
        server.listen(); // Start the test server
    });

    afterEach(() => {
        server.resetHandlers(); // Reset any runtime request handlers between tests
    });

    afterAll(() => {
        server.close(); // Close the test server after all tests are done
    });

    test("should sign up a user when the form is submitted with valid data", async () => {
        render(
            <Provider store={testStore}>
                <Router>
                    <Register />
                </Router>
            </Provider>
        );

        // Simulate user input
        fireEvent.change(screen.getByPlaceholderText("Enter your name"), {
            target: { value: "Test User" },
        });

        fireEvent.change(screen.getByPlaceholderText("Enter your email"), {
            target: { value: "testuser@example.com" },
        });

        fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
            target: { value: "testpassword" },
        });

        const createAccountButton = screen.getByRole("button", {
            name: /Register/i,
        });

        fireEvent.click(createAccountButton);

        await waitFor(() => {
            expect(window.location.href).toBe("http://localhost/");
        });
    });
});
