import React from 'react'
import error404 from '../images/error404.png'
import error from '../images/error.png'
import '../styles/error.css'

const Error = () => {
    return (
        <>
            <div className="errorpage">
                <img className='errorimg' src={error404} alt="" />
            </div>
        </>
    )
}

export default Error