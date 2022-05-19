import React from 'react'
import SearchBar from '../../components/Searchbar/Searchbar'
import { useState } from 'react';
import RecipCard from '../../components/RecipCard/RecipCard'
import './Home.scss'
import ImageAndText from '../../components/ImageAndText/ImageAndText'
import SwiperRandomRecipe from '../../components/SwiperRandomRecipe/SwiperRandomRecipe';
import { useAxios } from "use-axios-client";
import Loading from '../../components/Loading/Loading';

export const Home = () => {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState();
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APP_KEY}&query=${query}&diet=vegetarian`;
  const { data, error, loading } = useAxios({ url });

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
  }

  if (loading || !data) return <Loading />;
  if (error) return <p className='text-center'>Error + {error.status}</p>;

  return (
    <div className="App">
      <ImageAndText />
      <SearchBar updateSearch={updateSearch} getSearch={getSearch} search={search} />
      <div className='row m-auto'>
        {query !== undefined ? <h1 className='mb-5'>Results for the word "{query}"</h1> : ""}
        {
          data.results.map((recipe, index) => {
            return (
              <div className='col-12 col-md-4 mb-2 recipe-card'>
                <RecipCard key={index} id={recipe.id} title={recipe.title} image={recipe.image} />
              </div>
            )
          })
        }
        <SwiperRandomRecipe />
      </div>
    </div>
  );
}
