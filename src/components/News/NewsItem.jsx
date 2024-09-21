import React from "react";

export default function NewsItem(props) {
    return (
        <div className="flex justify-center">
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl m-2"> {/* Reduced margin */}
                <img
                    className="w-full h-48 object-cover"
                    src={props.image}
                    alt={props.title}
                />
                <div className="p-4"> {/* Adjusted padding */}
                    <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide mb-1">
                        {props.date}
                    </div>
                    <h2 className="text-lg font-bold text-gray-800 mb-2">
                        {props.title.length > 45 ? `${props.title.substring(0, 45)}...` : props.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                        {props.description.length > 100 ? `${props.description.substring(0, 100)}...` : props.description}
                    </p>
                    <p className="text-gray-600 text-sm mb-1">
                        <strong>Author:</strong> {props.author}
                    </p>
                    <a
                        href={props.url}
                        target="_blank"
                        className="inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:bg-blue-600"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}
