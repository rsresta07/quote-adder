import React, { useState } from "react";

function QuoteInput({ addQuote }) {
    const [quote, setQuote] = useState("");
    const [username, setUsername] = useState("");

    const handleAddQuote = () => {
        // Validate inputs
        if (quote.trim() === "") {
            alert("Quote cannot be empty."); // Alert for empty quote
            return;
        }
        if (username.trim() === "") {
            alert("Username cannot be empty."); // Alert for empty username
            return;
        }

        // Add quote if inputs are valid
        addQuote(`${username}: ${quote}`); // Prepend username to quote
        setQuote(""); // Reset quote input
        setUsername(""); // Reset username input
    };

    return (
        <div className="mb-4">
            {/* Textarea for the quote */}
            <textarea
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                placeholder="Enter your quote here..."
                className="w-full p-2 border rounded mb-2 resize-none" // Full width and no resizing
                rows="4" // Specify the number of rows for the textarea
            />

            {/* Container for username input and button */}
            <div className="flex justify-between">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your name..."
                    className="w-2/3 p-2 border rounded mr-2" // Adjust width and margin
                />
                <button
                    onClick={handleAddQuote}
                    className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600" // Decreased height
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default QuoteInput;
