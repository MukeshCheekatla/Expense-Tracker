import React from "react";
import { Link } from "react-router-dom";
import { FaRegChartBar, FaWallet, FaLock, FaLightbulb } from "react-icons/fa";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <Header variant="landing" />

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-12 lg:px-20 py-20 gap-12 max-w-[90rem] mx-auto">
        {/* Text */}
        <div className="max-w-lg space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-teal-700">
            Take Control of Your Money.
          </h1>
          <p className="text-lg text-gray-600">
            Easily monitor your spending, set budgets, and stay financially healthy—all in one app.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link
              to="/signup"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg shadow hover:bg-teal-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 rounded-lg border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Visual - CSS animated graphs */}
        <div className="relative w-full max-w-md h-64 lg:h-80 bg-teal-50 rounded-xl shadow-lg flex flex-col justify-center items-center">
          {/* Pie Chart */}
          <svg
            viewBox="0 0 36 36"
            className="w-40 h-40"
            role="img"
            aria-label="Pie chart showing spending categories"
          >
            <circle
              className="text-teal-300"
              stroke="currentColor"
              strokeWidth="10"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
              strokeDasharray="60 40"
              strokeDashoffset="25"
              strokeLinecap="round"
            />
            <circle
              className="text-teal-600"
              stroke="currentColor"
              strokeWidth="10"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
              strokeDasharray="40 60"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
          </svg>

          {/* Animated bars */}
          <div className="absolute bottom-8 left-8 flex space-x-2 items-end">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-4 bg-teal-400 rounded transition-all duration-700 ease-in-out animate-pulse`}
                style={{ height: `${30 + i * 20}px`, animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
          <div className="absolute bottom-8 right-8 flex space-x-1 items-end">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-2 bg-teal-600 rounded transition-all duration-700 ease-in-out animate-pulse`}
                style={{ height: `${20 + i * 15}px`, animationDelay: `${i * 300}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white max-w-[90rem] mx-auto px-4 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <FeatureCard
          icon={<FaWallet className="text-teal-600 w-10 h-10 mx-auto mb-4" />}
          title="Smart Expense Tracking"
          description="Track your expenses in real time with ease."
        />
        <FeatureCard
          icon={<FaRegChartBar className="text-teal-600 w-10 h-10 mx-auto mb-4" />}
          title="Budget Management"
          description="Set monthly budgets and get alerts when nearing limits."
        />
        <FeatureCard
          icon={<FaLightbulb className="text-teal-600 w-10 h-10 mx-auto mb-4" />}
          title="Insights & Reports"
          description="Visualize your spending habits with interactive charts."
        />
        <FeatureCard
          icon={<FaLock className="text-teal-600 w-10 h-10 mx-auto mb-4" />}
          title="Secure & Private"
          description="Your data is safe with bank-level encryption."
        />
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-teal-50 max-w-[90rem] mx-auto px-4 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-teal-700 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <Step number={1} text="Sign Up & Connect Your Accounts" />
          <Step number={2} text="Add Expenses & Set Budgets" />
          <Step number={3} text="Analyze Reports & Optimize Spending" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-16 text-center text-gray-600 text-sm">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-12 lg:px-20">
          <p>© {new Date().getFullYear()} Expense Tracker. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 justify-center">
            <SocialLink url="https://github.com/" label="GitHub" />
            <SocialLink url="https://linkedin.com/" label="LinkedIn" />
            <SocialLink url="https://twitter.com/" label="Twitter" />
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition cursor-default">
    {icon}
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Step = ({ number, text }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-600 text-white text-xl font-bold mb-4">
      {number}
    </div>
    <p className="text-gray-700 max-w-xs">{text}</p>
  </div>
);

const SocialLink = ({ url, label }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-teal-600 transition"
    aria-label={label}
  >
    {label}
  </a>
);

export default LandingPage;
