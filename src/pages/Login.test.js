import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { server } from "../mocks/server";
import { createStore, combineReducers } from "redux";
import { alertSlice } from "../redux/features/alertSlice";
import { userSlice } from "../redux/features/userSlice";
import Login from "./Login";

const testStore = createStore(
    combineReducers({
        alerts: alertSlice.reducer,
        user: userSlice.reducer,
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Signin Page", () => {

    test("should render correctly", () => {
        render(
            <Provider store={testStore}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );
    });

    test("should display at least one 'Sign In' text", () => {
        render(
            <Provider store={testStore}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );

        const signInTextElements = screen.queryAllByText("Login");
        expect(signInTextElements.length).toBeGreaterThan(0);
    });

    test("should display input fields for username and password", () => {
        render(
            <Provider store={testStore}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );

        const emailInput = screen.getByPlaceholderText(/Enter your email/i);
        const passwordInput = screen.getByPlaceholderText(/Enter your password/i);

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    test("should log in a user when the form is submitted", async () => {
        render(
            <Provider store={testStore}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );

        // Simulate user input
        fireEvent.change(screen.getByPlaceholderText("Enter your email"), {
            target: { value: "testuser" },
        });

        fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
            target: { value: "testpassword" },
        });

        // Click the submit button

        const signInButton = screen.getByRole("button", { name: /Login/i });

        fireEvent.click(signInButton);

        // Wait for the API call to complete=
        await waitFor(() => {
            expect(window.location.href).toBe("http://localhost/");
        });
    });
});