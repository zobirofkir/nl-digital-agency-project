import React from 'react'

const SearchFormComponent = () => (
  <form className="relative group flex items-center">
    <input
      type="text"
      placeholder="Search..."
      className="transition-all duration-300 ease-in-out pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm bg-white focus:w-64 w-36 focus:shadow-lg focus:border-blue-400 outline-none"
      style={{ minWidth: '9rem' }}
    />
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" />
      </svg>
    </span>
  </form>
)

export default SearchFormComponent
