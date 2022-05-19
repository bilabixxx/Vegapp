import React from 'react'
import './IngredientsList.scss'

const IngredientsList = (props) => {
  return (
    <li className='element-list mb-3 col-md-4' ><b className='text-capitalize'>{props.name}</b> {props.measures} {props.unit}</li>
  )
}

export default IngredientsList