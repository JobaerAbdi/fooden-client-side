import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-orange-200 text-slate-950">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="mb-10">
          <img
            className="h-96 rounded-lg"
            src="https://st2.depositphotos.com/1006899/8089/i/950/depositphotos_80897014-stock-photo-page-not-found.jpg"
            alt=""
          />
        </div>
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            Sorry, we couldn't find this page.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-gray-900 hover:bg-gray-700 text-gray-100"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
