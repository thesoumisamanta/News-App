import React from "react"

const countries = [
    "USA",
    "Canada",
    "UK",
    "Australia",
    "India",
    "Germany",
    "France"
];

export default function Countries (props){
    return (
        (props.isOpen) && (
            <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-gray-200 ring-1 ring-black ring-opacity-5">
                <ul className="py-1">
                    {countries.map((country, index) => (
                        <li key={index}>
                            <button
                                onClick={() => {
                                    props.onSelectCountry(country);
                                    props.closeDropdown();
                                }}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-300 w-full text-left"
                            >
                                {country}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    )
}