import React from "react";
import Card from "../shared/Card";

export default function SearchProducts({ search, setSearch }) {
  return (
    <Card>
      <h2>Search by category or name</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search product"
          className="input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </Card>
  );
}