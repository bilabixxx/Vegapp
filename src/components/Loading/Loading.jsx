import React from 'react'
import load from '../../assets/load.gif'
import './Loading.scss'

const Loading = () => {
    return (
        <div className='text-center'>
            <img className="mt-3" src={load} />
        </div>
    )
}

export default Loading