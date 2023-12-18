import { useState } from "react";
import SearchBar from "../ui/searchbar";
import CardSection from "../ui/cardsection";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useState({
    keywords: "",
    date: "",
    source: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchParams);
  };
  return (
    <>
      <h1>Search Articles</h1>
      <SearchBar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        handleSubmit={handleSubmit}
      />
      <CardSection title={"Result"} />
    </>
  );
};

export default SearchPage;
