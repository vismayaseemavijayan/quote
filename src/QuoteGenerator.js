import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Function to fetch a random quote
  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes/random');
      const data = response.data;
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  // Fetch an initial quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Random Quote Generator</h1>
      <div>
        <blockquote>"{quote}"</blockquote>
        <p>- {author}</p>
      </div>
      <button onClick={fetchQuote} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Get New Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;
