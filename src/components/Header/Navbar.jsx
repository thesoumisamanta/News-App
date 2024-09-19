import { useState } from "react"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

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
                            <a
                                href="/categories"
                                className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-md font-medium"
                            >
                                Categories
                            </a>
                            {/* <a
                                href="/about"
                                className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-md font-medium"
                            >
                                About
                            </a> */}
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
                        <a
                            href="/categories"
                            className="text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Categories
                        </a>
                        <a
                            href="/about"
                            className="text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </a>
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
    )
}