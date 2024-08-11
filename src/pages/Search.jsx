import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import Item from "../componenets/item/Item";

const Search = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {searchResults.length > 0 ? (
        searchResults.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            category={item.category}
            ratings={item.ratings}
          />
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Search;
