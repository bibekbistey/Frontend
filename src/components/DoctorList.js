import React from "react";
import { useNavigate } from "react-router-dom";
import defaultPicture from "../assets/avatar.png"; // Replace with your default picture file path

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card m-2 shadow-md rounded-lg bg-white hover:bg-gray-100 cursor-pointer max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
      onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
    >
      <div className="card-header bg-blue-500 text-white py-2 px-4 rounded-t-lg">
        <p>Dr. {doctor.firstName} {doctor.lastName}</p>
      </div>
      <div className="card-body py-4 px-6 flex flex-col md:flex-row items-center">
        <img
          src={doctor.profilePicture || defaultPicture}
          alt="Doctor Profile"
          className="w-20 h-20 rounded-full object-cover mr-4 md:mr-6"
        />
        <div className="mt-4 md:mt-0">
          <p className="text-lg mb-2 font-bold overflow-hidden h-12">
            <b>Specialization:</b> {doctor.specialization}
          </p>
          <p className="overflow-hidden h-6">
            <b>Experience:</b> {doctor.experience}
          </p>
          <p className="overflow-hidden h-6">
          <b>Fees: </b> <b>Rs</b> {doctor.feesPerCunsaltation}
          </p>
          <p className="overflow-hidden h-6">
            <b>Timings:</b> {doctor.timings[0]} - {doctor.timings[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
