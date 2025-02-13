import React from "react";

const Home = () => {
  return (
    <div>
      <section class="about">
        <h2>About DishDelight</h2>
        <p>
          DishDelights is a vibrant community dedicated to uniting food lovers
          from around the globe. With a vast collection of recipes, DishDelights
          offers a diverse range of dishes to suit every taste and dietary
          preference. They aspire to create a website that features detailed
          recipe descriptions, making it easy for anyone to discover and create
          delicious meals.
        </p>
      </section>
      <section class="popular">
        <h2>Popular recipes</h2>
        <div class="recipe-list">
          <div
            class="recipe"
          >
            <h3>Chicken Burger</h3>
            <p>
              The easy, homemade chicken burger recipe, right at your
              fingertips.
            </p>
            <a href="#">View recipe</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
