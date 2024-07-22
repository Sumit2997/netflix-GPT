import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestons from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

export const GptSearch = () => {
  return (
    <div> 
      <div className="absolute -z-10">
        <img src={BG_URL} alt="bg" />
      </div>
      <GptSearchBar />
      {/* <GptMovieSuggestons /> */}
    </div>
  );
};

export default GptSearch;
