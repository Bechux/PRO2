import React, { useState } from "react";

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filter, setFilter] = useState("all"); // Default filter is 'all'

  const recipes = [
    {
      id: 1,
      name: "Chicken Burger",
      description: "The easy, homemade chicken burger recipe.",
      image: "src/assets/images/burger.jpg",
      ingredients: ["Chicken patty", "Lettuce", "Tomato", "Bun", "Cheese"],
      instructions: "Grill chicken patty, toast bun, assemble with toppings.",
      type: "main", // Added category
    },
    {
      id: 2,
      name: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish.",
      image: "src/assets/images/spaghetti.jpg",
      ingredients: ["Spaghetti", "Eggs", "Parmesan", "Bacon", "Black Pepper"],
      instructions: "Cook spaghetti, mix with eggs, cheese, and bacon.",
      type: "main",
    },
    {
      id: 3,
      name: "Margherita Pizza",
      description: "Simple yet delicious Neapolitan pizza.",
      image: "src/assets/images/pizza.jpg",
      ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil"],
      instructions: "Spread sauce on dough, add cheese, bake at 475°F.",
      type: "main",
    },
    {
      id: 4,
      name: "Caesar Salad",
      description: "A crunchy, tangy salad with creamy dressing.",
      image: "src/assets/images/caesar-salad.jpg",
      ingredients: ["Romaine lettuce", "Croutons", "Parmesan", "Caesar dressing"],
      instructions: "Toss lettuce, croutons, and cheese with dressing.",
      type: "salad",
    },
    {
      id: 5,
      name: "Chocolate Cake",
      description: "Rich and moist chocolate cake.",
      image: "src/assets/images/cake.jpg",
      ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Butter"],
      instructions: "Mix ingredients, bake at 350°F, let cool, and serve.",
      type: "dessert",
    },
  ];

  // Filter recipes based on the selected category
  const filteredRecipes = filter === "all" ? recipes : recipes.filter((recipe) => recipe.type === filter);

  return (
    <section className="popular">
      <h2>Our Available Recipes</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("dessert")}>Desserts</button>
        <button onClick={() => setFilter("salad")}>Salads</button>
        <button onClick={() => setFilter("main")}>Main Course</button>
      </div>

      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe"
            style={{ backgroundImage: `url(${recipe.image})` }}
            onClick={() => setSelectedRecipe(recipe)}
          >
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="popup-overlay" onClick={() => setSelectedRecipe(null)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedRecipe(null)}>
              &times;
            </button>
            <h2>{selectedRecipe.name}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.name} />
            <h3>Ingredients</h3>
            <ul>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions</h3>
            <p>{selectedRecipe.instructions}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Recipes;
