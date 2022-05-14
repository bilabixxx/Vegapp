import React from 'react'
import { Link } from 'react-router-dom';
import './RecipCard.css'

const RecipCard = (props) => {
  return (
      <Link className='card-link' to={`/detail/${props.id}`}>
        <div className="card">
          <img className="card-img-top" src={props.image} alt={props.title} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
          </div>
        </div>
      </ Link>
  )
}

export default RecipCard;