import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <img
          src="https://miro.medium.com/v2/resize:fit:924/1*ZvwdIQkolJ2z1MILFrQjOQ.jpeg"
          alt=""
        />
        <p className="text-black-75 font-medium mb-4">
          Oops! Log in to access this feature.
        </p>
        <a
          href="/signin"
          className="text-white text-lg font-medium bg-purple-lighter hover:bg-purple-lighter-hover py-2 px-8 rounded-lg cursor-pointer transition duration-300"
        >
          Log In
        </a>
      </div>
    </div>
  );
};
export default ErrorPage;