import React, { useState, useEffect } from "react"

interface DropdownButtonProps {
  onOptionSelected: (option: string) => void
  reset: boolean
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  onOptionSelected,
  reset,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("Services")

  useEffect(() => {
    if (reset) {
      setSelectedOption("Services")
    }
  }, [reset])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsDropdownOpen(false)
    onOptionSelected(option)
  }

  return (
    <div className="relative inline-block">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="inline-flex items-center rounded-3xl bg-cyan-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {selectedOption}
        <div
          className="ml-2.5 mt-1 h-2.5 w-2.5 rotate-0 transform transition-transform"
          style={{
            transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
      </button>

      {isDropdownOpen && (
        <div
          id="dropdown"
          className="absolute z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li
              onClick={() => handleOptionClick("Car Detailing Services")}
              className={`hover-bg-gray-100 dark:hover-bg-gray-600 dark:hover-text-white block px-4 py-2 ${
                selectedOption === "Car Detailing Services"
                  ? "bg-cyan-200 text-cyan-700 dark:bg-cyan-700 dark:text-cyan-100"
                  : ""
              }`}
            >
              Car Detailing Services
            </li>
            <li
              onClick={() => handleOptionClick("Tiles Cleaning")}
              className={`hover-bg-gray-100 dark:hover-bg-gray-600 dark:hover-text-white block px-4 py-2 ${
                selectedOption === "Tiles Cleaning"
                  ? "bg-cyan-200 text-cyan-700 dark:bg-cyan-700 dark:text-cyan-100"
                  : ""
              }`}
            >
              Tiles Cleaning
            </li>
            <li
              onClick={() => handleOptionClick("Carpet Cleaning")}
              className={`hover-bg-gray-100 dark:hover-bg-gray-600 dark:hover-text-white block px-4 py-2 ${
                selectedOption === "Carpet Cleaning"
                  ? "bg-cyan-200 text-cyan-700 dark:bg-cyan-700 dark:text-cyan-100"
                  : ""
              }`}
            >
              Carpet Cleaning
            </li>
            <li
              onClick={() => handleOptionClick("Duct Cleaning")}
              className={`hover-bg-gray-100 dark:hover-bg-gray-600 dark:hover-text-white block px-4 py-2 ${
                selectedOption === "Duct Cleaning"
                  ? "bg-cyan-200 text-cyan-700 dark:bg-cyan-700 dark:text-cyan-100"
                  : ""
              }`}
            >
              Duct Cleaning
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownButton
