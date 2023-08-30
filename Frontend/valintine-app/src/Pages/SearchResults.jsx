import React from 'react';

const SearchResults = ({ results, handleResultClick }) => {
  return (
    <div className="search-results-container">
      {results.map((result) => (
        <div
          key={result._id}
          className="search-result"
          onClick={() => handleResultClick(result)}
        >
          {result.name}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
