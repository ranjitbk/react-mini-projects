import axios from "axios";
import React from "react";
import { useState } from "react";
import "./recipe.scss";

const YOUR_API_ID = "cf511e65";
const YOUR_API_KEY = "6812aa485459b60213b22c3007c15fba";

function RecipeFinder(props) {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const fetchRecipes = async () => {
    try {
      const recipes = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${YOUR_API_ID}&app_key=${YOUR_API_KEY}`
      );
      setRecipes(recipes.data.hits);
      setError("");
    } catch (error) {
      setRecipes([]);
      setError("No recipes found. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <form className="form" action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter ingredients or dish name"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <ul>
              {recipe.recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
            <a
              href={recipe.recipe.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Recipe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeFinder;
