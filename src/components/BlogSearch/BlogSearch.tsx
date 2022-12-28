import React from 'react';

export default function BlogSearch() {
  return (
    <form className="w-full">
      <div className="flex">
        <div className="relative w-full lg:w-3/4">
          <input
            type="search"
            id="search-dropdown"
            className="block w-full p-2.5 z-20 text-sm text-gray-900 bg-gray-50 rounded-lg outline-0 border border-gray-300 focus:ring-light-accent focus:border-light-accent dark:bg-gray-700 dark:border-gray-700  dark:placeholder-gray-400 dark:text-light-primary dark:focus:border-light-secondary transtion-all duration-300"
            placeholder="Search Articles, Tutorials..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-light-primary bg-light-accent rounded-r-lg border border-light-accent hover:bg-light-secondary focus:ring-4 focus:outline-none focus:ring-light-secondary dark:bg-light-secondary dark:hover:bg-light-accent dark:focus:ring-light-secondary transtion-all duration-300"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
