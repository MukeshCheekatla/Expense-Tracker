import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/UserContext";
import Header from "../../components/Header";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Original login logic unchanged
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-gray-800 font-sans flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 to-white">
      {/* Stable header with auth variant */}
      <Header variant="auth" />

      {/* Main content container for login form */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 md:p-12">
          {/* Heading */}
          <h3 className="text-3xl md:text-4xl font-extrabold text-teal-700 mb-8 text-center">
            Login to Expense Tracker
          </h3>

          <form onSubmit={handleLogin} noValidate>
            <div className="mb-6">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                label="Email Address"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                className={`transition ${
                  error && !validateEmail(email)
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-teal-500"
                }`}
                aria-invalid={!!error && !validateEmail(email)}
                aria-describedby="email-error"
              />
            </div>

            <div className="mb-6">
              <Input
                id="password"
                type="password"
                placeholder="Min 8 Characters"
                label="Password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                className={`transition ${
                  error && !password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-teal-500"
                }`}
                aria-invalid={!!error && !password}
                aria-describedby="password-error"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm mb-6" role="alert" id="error-message">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white font-semibold transition-colors duration-200 shadow-md ${
                loading
                  ? "bg-teal-300 cursor-not-allowed"
                  : "bg-teal-600 hover:bg-teal-700"
              }`}
            >
              {loading ? (
                <span className="flex justify-center items-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                  <span>Logging in...</span>
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-700 text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-teal-600 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
