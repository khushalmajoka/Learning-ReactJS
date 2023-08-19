import React from 'react'
import Image404 from '../images/PageNotFoundImage.jpg'

const PageNotFound = () => {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img src={Image404} alt='404' style={{
        height: '80%',
      }}/>
    </div>
  )
}

export default PageNotFound
