function Search(props) {
  function handleSearch(searchText) {
    const searchRestaurants = props.allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    props.searchFunction(searchRestaurants);
  }

  return (
    <>
      <input
        type="text"
        className="border"
        onChange={(e) => handleSearch(e.target.value)}
      ></input>
    </>
  );
}

export default Search;
