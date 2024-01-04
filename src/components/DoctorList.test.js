import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DoctorList from "./DoctorList";

describe("DoctorList Page", () => {
    const doctor = {
        "_id": "64cf1e2077b9a8d3f990bbdf",
        "firstName": "John",
        "lastName": "Doe",
        "phone": "1234567890",
        "email": "john.doe@example.com",
        "website": "johndoe.com",
        "address": "123 Main St",
        "specialization": "Cardiology",
        "experience": "5 years",
        "feesPerCunsaltation": 100,
        "status": "approved",
        "timings": {
            "Monday": "10:00 AM - 5:00 PM",
            "Tuesday": "9:00 AM - 4:00 PM"
        },
        "createdAt": "2023-08-06T04:14:24.515Z",
        "updatedAt": "2023-08-06T04:14:24.515Z",
        "__v": 0
    };


    test("should render correctly", () => {
        render(
            <Router>
                <DoctorList doctor={doctor} />
            </Router>
        );
    });

    test("should display at least one 'Doctor' text", () => {
        render(
            <Router>
                <DoctorList doctor={doctor} />
            </Router>
        );

        const doctorTextElements = screen.queryAllByText("Dr. John Doe");
        expect(doctorTextElements.length).toBeGreaterThan(0);
    }); 

    test("should display input fields for specialization", () => {
        render(
            <Router>
                <DoctorList doctor={doctor} />
            </Router>
        );

        const specializationInput = screen.getByText("Cardiology");
        expect(specializationInput).toBeInTheDocument();
    });

});