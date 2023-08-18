import React, { useState } from "react";

const EventForm = () => {

  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isMouseOverButton, setIsMouseOverButton] = useState(false);

  const handleMouseEnter = (e) => {
    // TODO
  };

  const handleMouseLeave = () => {
    // TODO
  };

  return (
    <div className="m-36">
      <h1 className="font-bold text-3xl flex justify-center m-5 pr-40">Sign In</h1>
      <div className="flex justify-center m-3">
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            type="email"
            name="email"
            class="mt-1 px-3 py-2 w-64 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <div className="flex justify-center m-3">
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Password
          </span>
          <input
            type="password"
            name="password"
            class="mt-1 px-3 py-2 w-64 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            placeholder="********"
          />
        </label>
      </div>
      <div className="flex justify-center m-6">
        <label class="block">
          <button
            type="button"
            name="button"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded `}
            placeholder="you@example.com"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >Sign In</button>
        </label>
      </div>
    </div>
  );
};

export default EventForm;
