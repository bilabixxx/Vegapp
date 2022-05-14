import React from 'react';
import IngredientsList from '../../components/IngredientsList/IngredientsList';
import RecipeSteps from '../../components/RecipeSteps/RecipeSteps';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './Detail.css';
import IconList from '../../components/IconList/IconList';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const Detail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const API_KEY = "24e8eefed1cf45608cf05cf96e958cb1";
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`;
  let steps = [];

  useState(() => {
    axios.get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        navigate("/*");
      })
  }, [url])

  if (data) {
    return (
      <>
        <div className="header-detail text-center">
          <h1 className="my-5 title">{data.title}</h1>
          <img className="mt-3" src={data.image} />
          <IconList time={data.readyInMinutes} serving={data.servings} price={data.pricePerServing} health={data.healthScore} />
        </div>
        <div className='text-center m-auto mt-5 row'>
          <h2>Summary</h2>
          <div className='text-center mt-4 summary' dangerouslySetInnerHTML={{ __html: data.summary }}>
          </div>
        </div>
        <div className='ingredients-container mt-5 mx-auto row row-cols-4'>
          <ul className='mt-5 mx-auto row'>
            {data.extendedIngredients.map(ingredient => {

              return <IngredientsList key={ingredient.id} name={ingredient.name} measures={ingredient.measures.metric.amount} unit={ingredient.measures.metric.unitShort} />
            })}
          </ul>
        </div>



        <div className='d-flex flex-column align-items-center m-auto mt-5'>
          {
            data.analyzedInstructions.map(instruction => {
              instruction.steps.map(step => {
                steps.push(step)
              })
            })
          }

          {
            steps.map(step => {
              return <RecipeSteps key={step.number} number={step.number} step={step.step} />
            })
          }
        </div>
      </>
    )
  }



}
