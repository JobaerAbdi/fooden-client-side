import React, { useEffect, useState } from 'react';
import MainBanner from '../../Pages/MainBanner';
import { useLoaderData } from 'react-router-dom';
import DisplayRecipe from '../../Pages/DisplayRecipe';
import SectionOne from '../../Pages/SectionOne/SectionOne';

const Home = () => {
    const [recipes,setRecipes] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/recipes')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])

    return (
        <div>
            <MainBanner></MainBanner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-12'>
                {
                    recipes.map(recipe=><DisplayRecipe
                        key={recipe.id}
                        recipe={recipe}
                    ></DisplayRecipe>)
                }
            </div>
            <SectionOne></SectionOne>
        </div>



    );
};

export default Home;