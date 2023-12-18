import searchbarstyle from "../../css/searchbar.module.css";

const SearchBar = ({ searchParams, setSearchParams, handleSubmit }) => {
  return (
    <>
      <form className={searchbarstyle.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What are you looking for?"
          value={searchParams.keywords}
          onChange={(e) => {
            setSearchParams((state) => {
              return {
                ...state,
                keywords: e.target.value,
              };
            });
          }}
        />
        <br />
        <button
          type="submit"
          className={searchbarstyle.searchButton}
          onClick={handleSubmit}
        >
          <i className="fa fa-search"></i>
        </button>
        <div>
          <label>
            Date:
            <input
              type="date"
              onChange={(e) => {
                console.log(e);
                setSearchParams((state) => {
                  return {
                    ...state,
                    date: e.target.value,
                  };
                });
              }}
            />
            {/* <select
              onChange={(e) => {
                setSearchParams((state) => {
                  return {
                    ...state,
                    date: e.target.value,
                  };
                });
              }}
            >
              <option value="someOption" disabled selected>
                Select
              </option>
              <option value="someOption">2022-2023</option>
              <option value="otherOption">2021-2022</option>
            </select> */}
          </label>
          <label>
            Category:
            <select
              onChange={(e) => {
                setSearchParams((state) => {
                  return {
                    ...state,
                    category: e.target.value,
                  };
                });
              }}
            >
              <option value="someOption" disabled selected>
                Select
              </option>
              <option value="someOption">Some option</option>
              <option value="otherOption">Other option</option>
            </select>
          </label>
          <label>
            Source:
            <select
              onChange={(e) => {
                setSearchParams((state) => {
                  return {
                    ...state,
                    source: e.target.value,
                  };
                });
              }}
            >
              <option value="someOption" disabled selected>
                Select
              </option>
              <option value="someOption">Some option</option>
              <option value="otherOption">Other option</option>
              <option value="otherOption">Other option</option>
            </select>
          </label>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
