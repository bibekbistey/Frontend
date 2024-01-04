import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Spinner from "./Spinner";

describe("Spinner Component", () => {
    test("should render correctly", () => {
        render(
            <Router>
                <Spinner />
            </Router>
        );
    });

    test("should display at least one 'Loading...' text", () => {
        render(
            <Router>
                <Spinner />
            </Router>
        );

        const loadingTextElements = screen.queryAllByText("Loading...");
        expect(loadingTextElements.length).toBeGreaterThan(0);
    });
});