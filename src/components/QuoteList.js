import React from "react";

function QuoteList({ quotes, deleteQuote }) {
    return (
        <ul className="list-disc">
            {quotes.map((quote, index) => {
                // Split the username and the quote
                const [username, ...quoteText] = quote.split(": ");
                return (
                    <li
                        key={index}
                        className="mb-2 flex justify-between items-start bg-white p-3 rounded shadow-md transition-shadow duration-300 hover:shadow-lg"
                    >
                        <div className="flex-1">
                            {/* Username with margin bottom */}
                            <p className="font-bold mb-1">{username}:</p>
                            {/* Quote text */}
                            <p className="whitespace-pre-line">
                                {quoteText.join(": ")}
                            </p>
                        </div>
                        <button
                            onClick={() => deleteQuote(index)}
                            className="ml-4 text-red-500 hover:text-red-700"
                        >
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default QuoteList;
