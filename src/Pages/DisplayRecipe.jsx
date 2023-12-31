import React from "react";
import { Link } from "react-router-dom";

const DisplayRecipe = ({ recipe }) => {
  console.log(recipe);
  const { chef_img, chefName, yearsOfExperience, numberOfRecipes,Likes,id } = recipe;
  return (
    <div className="card card-compact bg-base-100 shadow-lg">
      <figure>
        <img className="w-96 h-64 rounded-lg" 
          src={chef_img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="ms-9">
            <h2 className="card-title">Chef Name : {chefName}</h2>
            <h2 className="card-title">Years of Experience : {yearsOfExperience}</h2>
            <h2 className="card-title">Numbers of recipes : {numberOfRecipes}</h2>
            <h2 className="card-title">Total Likes : {Likes}</h2>
        </div>
        <div className="card-actions justify-end">
            <Link to={`/recipes/${id}`}>
              <button className="btn btn-primary">View Recipes</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayRecipe;
