import IngredientsList from '../../components/IngredientsList/IngredientsList';
import RecipeSteps from '../../components/RecipeSteps/RecipeSteps';
import { useParams } from 'react-router-dom';
import './Detail.scss';
import IconList from '../../components/IconList/IconList';
import { useAxios } from "use-axios-client";
import Loading from '../../components/Loading/Loading'




export const Detail = () => {
  const { id } = useParams();
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_APP_KEY}&includeNutrition=false`;
  let steps = [];

  const { data, error, loading } = useAxios({ url });

  if (loading || !data) return <Loading />;
  if (error) return <p className='text-center'>Error + {error.status}</p>;


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
            {data.extendedIngredients.map((ingredient, index) => {

              return <IngredientsList key={index} name={ingredient.name} measures={ingredient.measures.metric.amount} unit={ingredient.measures.metric.unitShort} />
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
            steps.map((step, index )=> {
              return <RecipeSteps key={index} number={step.number} step={step.step} />
            })
          }
        </div>
      </>
    )
  }

  