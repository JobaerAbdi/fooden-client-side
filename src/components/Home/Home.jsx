import React, { Suspense, useEffect, useState } from 'react';
import MainBanner from '../../Pages/MainBanner';
// import DisplayRecipe from '../../Pages/DisplayRecipe';
import SectionOne from '../../Pages/SectionOne/SectionOne';
import SectionTwo from '../../Pages/SectionOne/SectionTwo';
import { useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const DisplayRecipe = React.lazy(()=>import('../../Pages/DisplayRecipe'));

const Home = () => {
    const [recipes,setRecipes] = useState([])
    useEffect(()=>{
        fetch('https://fooden-server-side-jobaerabdi.vercel.app/recipes')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])

    const navigation = useNavigation();
    if(navigation.state === 'loading'){
      return <LoadingSpinner></LoadingSpinner>
    };

    return (
        <div>
            <MainBanner></MainBanner>
            <Suspense fallback={<div>Loading....</div>}></Suspense>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-12'>
                {
                    recipes.map(recipe=><DisplayRecipe
                        key={recipe.id}
                        recipe={recipe}
                    ></DisplayRecipe>)
                }
            </div>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
        </div>



    );
};

export default Home;