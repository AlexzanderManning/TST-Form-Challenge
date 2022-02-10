import "./App.css";

import SignUp from "./components/SignUp/";
import WorldLogo from "./components/WorldLogo/WorldLogo";

export default function App() {
  return (
    <div className="md:flex flex flex-col-reverse md:flex-row md:overflow-y-hidden min-h-screen ">
      <div className=" md:w-1/2 ">
        <SignUp />
      </div>

      <div className="md:w-1/2 bg-blue-700 align-middle flex flex-col px-4 ">
        <div className="mt-10">
          <img
            className="mx-auto h-24 w-auto"
            src="https://booktst.com/images/logo.png"
            alt="TST_Logo"
          />
        </div>

        <div className="mt-10 text-center w-3/4 mx-auto">
          <div className="font-bold text-white text-4xl py-5">
            <p className="">Start Maximizing Bookings Today</p>
          </div>

          <p className="text-white text-2xl mt-2">
            Harness the power of our online technology to improve look-to-book
            ratios and maximize online travel sales.
          </p>
        </div>
        <div className="my-5 px-10 mx-auto">
          <WorldLogo />
        </div>
      </div>
    </div>
  );
}
