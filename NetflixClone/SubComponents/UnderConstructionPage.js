import React from 'react'
import '../CSS/UnderConstructionPage.css'
import Image from '../Sources/UnderConstructionImage.jpg'

function UnderConstructionPage() {
  return (
    <div className='container-constpage'>
        <div><h1>Oops! This page under construction...</h1></div>
        <img src={Image} className='constimg'/>
    </div>
  )
}

export default UnderConstructionPage