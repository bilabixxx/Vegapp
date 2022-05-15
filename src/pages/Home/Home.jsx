import React from 'react'
import SearchBar from '../../components/Searchbar/Searchbar'
import { useState, useEffect } from 'react';
import RecipCard from '../../components/RecipCard/RecipCard'
import axios from 'axios'
import './Home.css'
import ImageAndText from '../../components/ImageAndText/ImageAndText'
import SwiperRandomRecipe from '../../components/SwiperRandomRecipe/SwiperRandomRecipe';
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState();
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    getRecipe();
  }, [query])
  const getRecipe = () => {
    const APP_KEY = '62c751ac972e43aab21ffddfba0e916b';
    //const APP_KEY = '24e8eefed1cf45608cf05cf96e958cb1';
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_KEY}&query=${query}&diet=vegetarian`;
    axios.get(url)
      .then((res) => {
        setData(res.data.results);
      })
      .catch(() => {
        navigate("/*");
      })
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
  }
  return (
    <>
      <div className="App">
        <ImageAndText />
        <SearchBar updateSearch={updateSearch} getSearch={getSearch} search={search} />
        <div className='row m-auto'>
          {query !== undefined ? <h1 className='mb-5'>Results for the word "{query}"</h1> : ""}
          {
            data.map(recipe => {
              return (
                <div className='col-12 col-md-4 mb-2 recipe-card'>
                  <RecipCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />
                </div>
              )
            })
          }
          <SwiperRandomRecipe />
        </div>
      </div>
    </>
  );
}

