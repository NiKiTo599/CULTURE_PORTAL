import React from "react";
import './search.css';

class Search extends React.Component {
    render() {
      return (
        <div className="container">
          <h1>Белорусские режиссёры театра</h1>
          <form action="">
            <input
              type="search"
              placeholder="Begin your search..."
              value=""
            />
            <div class="fa fa-search"></div>
          </form>
          <div className="search-result">
          </div>
        </div>
      )
    }
}

export default Search;