import React, { useContext, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../SearchContext"; // Import the context

const Searchbar = () => {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery, setFilteredProducts, clearSearchQuery } =
    useContext(SearchContext); // Removed `filteredProducts`
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value.length >= 2) {
      setError(""); // Clear the error if the query length is valid
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchQuery.length < 2) {
      setError("Please enter at least 2 characters.");
      return;
    }

    // Make API call to search the product
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `https://admin.senex.lk/Api/Item?KeyW=${searchQuery}`,
        {
          method: "GET",
          headers: {
            APIKey: apiKey,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products.");
      }
      const data = await response.json();

      if (data.success && data.data.length > 0) {
        setFilteredProducts(data.data); // Save results in the context
        navigate(`/product/search?q=${searchQuery}`);
      } else {
        setError("No products found.");
        clearSearchQuery(); // Clear the search if no results
      }
    } catch (err) {
      setError("Error fetching products. Please try again later.");
      clearSearchQuery();
    }
  };

  // Effect to clear error after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 2000); // Clear the error after 2 seconds
      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [error]);

  return (
    <div className="w-[330px] xxs:w-[370px] xs:w-[370px] lg:ml-6 mxl:ml-10 lxl:ml-6 2xl:ml-7 sm:ml-6 md:ml-7 sm:w-[600px] ssm:w-[480px] md:w-[92%] mx-auto justify-center lg:w-[94%] xl:w-[90%] mxl:w-[980px] 2xl:w-[90%]  mt-5 flex items-center mxl:h-[50px] xl:h-[40px] h-[50px]">
      <form onSubmit={handleSubmit} className="w-full h-full flex">
        <button
          type="submit"
          className="w-[50px] h-[50px] xl:h-[40px] mxl:h-[50px] rounded-l-md bg-red-600 flex items-center hover:cursor-pointer"
        >
          <IoSearch size={25} className="mx-auto text-white" />
        </button>
        <input
          type="text"
          placeholder="Search a product..."
          value={searchQuery}
          onChange={handleChange}
          className="border w-full h-full pl-5 bg-black/20 text-white rounded-r-lg border-red-600"
        />
      </form>
      {error && <p className="text-red-500 text-center absolute">{error}</p>}
    </div>
  );
};

export default Searchbar;
