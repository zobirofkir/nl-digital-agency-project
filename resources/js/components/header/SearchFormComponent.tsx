import React, { useRef } from 'react'

const SearchFormComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form
      className="relative flex items-center w-full max-w-xs md:max-w-sm"
      onSubmit={e => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className={`
          peer
          w-28 md:w-40
          focus:w-36 md:focus:w-52
          transition-all duration-300
          px-4 py-2
          bg-transparent
          border-b-2 border-gray-400
          focus:border-black
          outline-none
          text-base md:text-md
          placeholder-gray-400
          text-black
          font-medium
          ml-2
        `}
        style={{ minWidth: '6rem' }}
      />
      <span
        className={`
          absolute left-0 top-1/2 -translate-y-1/2
          flex items-center
          pointer-events-none
          text-gray-400 peer-focus:text-black
          pl-0
          transition-colors duration-200
        `}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" />
        </svg>
      </span>
      {/* Animated underline */}
      <span
        className={`
          absolute left-0 bottom-0 h-0.5
          w-0 bg-black
          transition-all duration-300
          peer-focus:w-full
        `}
        aria-hidden
      />
    </form>
  )
}

export default SearchFormComponent
