import React, { useState } from "react";
import { useLoaderData, useNavigation} from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ChefRecipesItem = () => {
    const [isDisable01, setIsDisable01] = useState(false)
    const [isDisable02, setIsDisable02] = useState(false)
    const [isDisable03, setIsDisable03] = useState(false)

    const handleDisable01=()=>{
        setIsDisable01(!isDisable01)
        toast.success('He is my favorite chef')
    };

    const handleDisable02=()=>{
        setIsDisable02(!isDisable02)
        toast.success('He is my favorite chef')
    };

    const handleDisable03=()=>{
        setIsDisable03(!isDisable03)
        toast.success('He is my favorite chef')
    };


  const chefRecipe = useLoaderData();
  const { chef_img, chefName, Likes, numberOfRecipes, yearsOfExperience,recipe1,recipe2,recipe3,bioData } =
    chefRecipe;
  console.log(chefRecipe);

  const navigation = useNavigation();
    if(navigation.state === 'loading'){
      return <LoadingSpinner></LoadingSpinner>
    };
  
  return (
    <div className="mx-14 mt-8">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="ms-56">
          <img src={chef_img} alt="chef" />
        </figure>
        <div className="card-body ms-20 ">
            <h1 className="font-bold">Bio Data : </h1>
          <h2 className="card-title"><img className="w-96 h-96" src={bioData} alt="" /></h2>
          <h2 className="card-title font-bold">Name : {chefName}</h2>
          <h2 className="card-title font-bold">Number Of Recipes : {numberOfRecipes}</h2>
          <h2 className="card-title font-bold">
            Years Of Experience : {yearsOfExperience}
          </h2>
          <h2 className="card-title font-bold">Likes : {Likes}</h2>
        </div>
      </div>

      <div className="flex justify-between my-9">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Recipe Name : {recipe1.recipeName}</h2>
            <h3 className="font-semibold">Ingredients : {recipe1.ingredients.map(ingredient=> <li>{ingredient}</li>)}</h3>
            <h2 className="card-title">Ratings : {recipe1.rating}</h2>
            <div className="card-actions">
              <button onClick={handleDisable01} className="btn btn-primary" disabled={isDisable01}>Favorite</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Recipe Name : {recipe2.recipeName}</h2>
            <h3 className="font-semibold">Ingredients : {recipe2.ingredients.map(ingredient=> <li>{ingredient}</li>)}</h3>
            <h2 className="card-title">Ratings : {recipe2.rating}</h2>
            <div className="card-actions">
              <button onClick={handleDisable02} className="btn btn-primary" disabled={isDisable02}>Favorite</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Recipe Name : {recipe3.recipeName}</h2>
            <h3 className="font-semibold">Ingredients : {recipe3.ingredients.map(ingredient=> <li>{ingredient}</li>)}</h3>
            <h2 className="card-title">Ratings : {recipe3.rating}</h2>
            <div className="card-actions">
              <button onClick={handleDisable03} className="btn btn-primary" disabled={isDisable03}>Favorite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipesItem;

