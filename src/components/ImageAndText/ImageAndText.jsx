import React from 'react'
import './ImageAndText.css'
import cover from '../../assets/vegan-cover.jpg'

const ImageAndText = () => {
    return (
        <div className="grid">
            <figure className="effect-sarah">
                <img src={cover} alt="vegapp" />
                <figcaption>
                    <h2>VEG <span>APP</span></h2>
                    <p className='bg-transparent'>The vegan recipe site for staying healthy.</p>
                </figcaption>
            </figure>
        </div>
    )
}

export default ImageAndText