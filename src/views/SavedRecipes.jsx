import React, { useEffect, useState } from "react";

const SavedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ name: "", description: "", image: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(savedRecipes);
  }, []);

  const updateLocalStorage = (updatedRecipes) => {
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedRecipes;
    if (editingIndex !== null) {
      updatedRecipes = recipes.map((recipe, index) =>
        index === editingIndex ? { ...newRecipe, id: recipe.id } : recipe
      );
      setEditingIndex(null);
    } else {
      updatedRecipes = [...recipes, { ...newRecipe, id: Date.now() }];
    }
    setRecipes(updatedRecipes);
    updateLocalStorage(updatedRecipes); // Save immediately
    setNewRecipe({ name: "", description: "", image: "" });
  };

  const handleEdit = (index) => {
    setNewRecipe(recipes[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
    updateLocalStorage(updatedRecipes); // Save immediately
  };

  return (
    <section className="saved">
      <h2>My Recipes</h2>
      <form onSubmit={handleSubmit} className="recipe-form">
        <input
          type="text"
          name="name"
          value={newRecipe.name}
          onChange={handleChange}
          placeholder="Recipe Name"
          required
        />
        <textarea
          name="description"
          value={newRecipe.description}
          onChange={handleChange}
          placeholder="Recipe Description"
          required
        ></textarea>
        <input
          type="text"
          name="image"
          value={newRecipe.image}
          onChange={handleChange}
          placeholder="Image URL (optional)"
        />
        <button type="submit">{editingIndex !== null ? "Update Recipe" : "Add Recipe"}</button>
      </form>

      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <div key={recipe.id} className="recipe" style={{ backgroundImage: `url(${recipe.image})` }}>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => handleEdit(index)} style={{ cursor: "pointer" }}>Edit</button>
              <button onClick={() => handleDelete(index)} style={{ cursor: "pointer" }}>Delete</button>
            </div>
          ))
        ) : (
          <p>No saved recipes yet.</p>
        )}
      </div>
    </section>
  );
};

export default SavedRecipes;
