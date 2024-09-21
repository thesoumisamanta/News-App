import React, { useState, useEffect, useRef } from "react";
import Categories from "../News/Categories";
import Countries from "../News/Countries";

export default function Navbar({ onSelectCategory, onSelectCountry }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const countryDropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false);
        }
        if (
            countryDropdownRef.current &&
            !countryDropdownRef.current.contains(event.target)
        ) {
            setIsCountryDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="/" className="text-2xl font-bold text-blue-800">
                                News App
                            </a>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <a
                                href="/products"
                                className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-md font-medium"
                            >
                                Home
                            </a>
                            {/* Categories Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-md font-medium"
                                >
                                    Categories
                                    <span className="ml-1">▼</span>
                                </button>
                                <Categories
                                    isOpen={isDropdownOpen}
                                    onSelectCategory={onSelectCategory}
                                    closeDropdown={() => setIsDropdownOpen(false)}
                                />
                            </div>
                            {/* Countries Dropdown */}
                            <div className="relative" ref={countryDropdownRef}>
                                <button
                                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                    className="flex items-center text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-md font-medium"
                                >
                                    Countries
                                    <span className="ml-1">▼</span>
                                </button>
                                <Countries
                                    isOpen={isCountryDropdownOpen}
                                    onSelectCountry={onSelectCountry}
                                    closeDropdown={() => setIsCountryDropdownOpen(false)}
                                />
                            </div>
                            <a
                                href="/contact"
                                className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-md font-medium"
                            >
                                Contact
                            </a>
                        </div>
                        {/* Hamburger menu for mobile */}
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-700 hover:text-green-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="/products"
                            className="text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </a>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Categories
                                <span className="ml-1">▼</span>
                            </button>
                            <Categories
                                isOpen={isDropdownOpen}
                                onSelectCategory={onSelectCategory}
                                closeDropdown={() => setIsDropdownOpen(false)}
                            />
                        </div>
                        <div className="relative" ref={countryDropdownRef}>
                            <button
                                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                className="flex items-center text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Countries
                                <span className="ml-1">▼</span>
                            </button>
                            <Countries
                                isOpen={isCountryDropdownOpen}
                                onSelectCountry={onSelectCountry}
                                closeDropdown={() => setIsCountryDropdownOpen(false)}
                            />
                        </div>
                        <a
                            href="/contact"
                            className="text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </a>
                    </div>
                )}
            </nav>
        </>
    );
}
