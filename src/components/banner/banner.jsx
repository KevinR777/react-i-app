import React from 'react'
import './banner.styles.css'

const Banner = ({message}) => {
    return <div id="banner" className='banner'>
        {message}
    </div>
}

export default Banner