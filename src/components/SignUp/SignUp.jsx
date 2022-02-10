import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import Alert from "../Alert/Alert";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showMatchingPasswordsAlert, setShowMatchingPasswordsAlert] =
    useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  console.table([email, password, confirmPassword]);

  const handlePasswordValidation = () => {
    if (password === confirmPassword) {
      return true;
    }

    return false;
  };

  const handleChange = (callback, event) => {
    if (showMatchingPasswordsAlert === true) {
      setShowMatchingPasswordsAlert(false);
    }

    if (showSuccessAlert === true) {
      setShowSuccessAlert(false);
    }

    callback(event);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handlePasswordValidation() === false) {
      setShowMatchingPasswordsAlert(true);
      setPassword("");
      setConfirmPassword("");
    }

    if (handlePasswordValidation() === true) {
      setShowSuccessAlert(true);
    }

    console.log("Submitted : ", email, password);
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="my-10">
            <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
              Create an Account
            </h2>
          </div>

          <form
            className="mt-0"
            action="#"
            method="POST"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md -space-y-px">
              <div className="pb-4">
                <label htmlFor="email-address" className="">
                  Email address
                </label>

                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="pb-4">
                <label htmlFor="password" className="">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => handleChange(setPassword, e.target.value)}
                />
              </div>
              <div className="pb-4">
                <label htmlFor="confirm-password" className="">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    handleChange(setConfirmPassword, e.target.value)
                  }
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Sign Up
                </button>
              </div>
            </div>
          </form>

          <div className="h-16 py-auto flex flex-col mt-2 ">
            <div className="self-center my-1">
              <Alert showAlert={showMatchingPasswordsAlert}>
                The "Password", and "Confirm Password" fields do not match.
                Please try again.
              </Alert>
            </div>

            <div className="self-center w-full my-1">
              <Alert showAlert={showSuccessAlert} success={true}>
                Success!
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
