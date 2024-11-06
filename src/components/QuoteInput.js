import React, { useState } from "react";

function QuoteInput({ addQuote }) {
    const [quote, setQuote] = useState("");
    const [username, setUsername] = useState("");

    const handleAddQuote = () => {
        // Validate inputs
        if (quote.trim() === "") {
            alert("Quote cannot be empty.");
            return;
        }
        if (username.trim() === "") {
            alert("Username cannot be empty.");
            return;
        }

        // Add quote if inputs are valid
        addQuote(`${username}: ${quote}`);
        setQuote("");
        setUsername("");
    };

    return (
        <div className="mb-4">
            {/* Textarea for the quote */}
            <textarea
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                placeholder="Enter your quote here..."
                className="w-full p-2 border rounded mb-2 resize-none"
                rows="4" 
            />

            {/* Container for username input and button */}
            <div className="flex justify-between">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your name..."
                    className="w-2/3 p-2 border rounded mr-2" 
                />
                <button
                    onClick={handleAddQuote}
                    className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600" 
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default QuoteInput;
