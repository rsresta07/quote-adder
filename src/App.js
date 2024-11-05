import React, { useState, useEffect } from "react";
import QuoteInput from "./components/QuoteInput";
import QuoteList from "./components/QuoteList";

function App() {
    const [quotes, setQuotes] = useState(() => {
        // Load from local storage if available
        const storedQuotes = localStorage.getItem("quotes");
        return storedQuotes ? JSON.parse(storedQuotes) : [];
    });

    useEffect(() => {
        // Update local storage whenever quotes change
        localStorage.setItem("quotes", JSON.stringify(quotes));
    }, [quotes]);

    const addQuote = (quote) => {
        if (quote.trim()) {
            setQuotes([...quotes, quote.trim()]);
        }
    };

    const deleteQuote = (index) => {
        const updatedQuotes = quotes.filter((_, i) => i !== index);
        setQuotes(updatedQuotes);
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Quotes Adder</h1>

            {/* Form to add quotes */}
            <QuoteInput addQuote={addQuote} />

            {/* List of quotes */}
            <QuoteList quotes={quotes} deleteQuote={deleteQuote} />
        </div>
    );
}

export default App;
