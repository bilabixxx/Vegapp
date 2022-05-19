import React from 'react'
import './RecipeSteps.scss'
const RecipeSteps = (props) => {
  return (
    <div className='step d-flex mb-3 row'>
      <div className='step-number fs-2 d-flex flex-column justify-content-center'>
        <span className='fw-bold text-center'>{props.number}</span>
      </div>
      <div className='m-3 step-description text-break text-start d-flex'>{props.step}</div>
    </div>
  )
}

export default RecipeSteps