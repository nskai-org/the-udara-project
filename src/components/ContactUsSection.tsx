/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function ContactUsSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    // simulate API delay
    setTimeout(() => {
      console.log("Email submitted:", email); // you can store this in localStorage if you like
      setStatus("success");
      setMessage("Successfully signed up! Thank you for joining the movement.");
      setEmail("");
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-pink-50"
    >
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Students working together on laptops"
              className="w-full h-96 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Form */}
          <div className="relative order-1 lg:order-2">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-indigo-900 mb-4">
                Sign Up to Join the Movement
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 mb-8">
                Be part of the movement shaping Africa&apos;s digital future.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-6 py-4 rounded-xl bg-orange-100 border-2 border-transparent focus:border-orange-300 focus:bg-white focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-500 text-lg"
                />

                {message && (
                  <div
                    className={`p-4 rounded-lg ${
                      status === "success"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg text-lg"
                >
                  {status === "loading" ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
