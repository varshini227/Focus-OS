const quotes = [
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Your limitation—it's only your imagination.", author: "Anonymous" }
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    
    document.getElementById("quote-text").textContent = `"${selectedQuote.text}"`;
    document.getElementById("quote-author").textContent = `- ${selectedQuote.author}`;
}

// Run the function immediately when the blocked page opens
document.addEventListener("DOMContentLoaded", displayRandomQuote);